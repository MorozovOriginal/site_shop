const userModel = require("../models/user-model");
const bcrypt = require("bcrypt");
const uuid = require("uuid");
const emailService = require("./email-service");
const tokerService = require("./token-service");
const UserDto = require("../dtos/uset-dto");
const ApiError = require("../exceptions/api-error");
const tokenService = require("./token-service");

class UserService {
    async registration(email, name, password) {

        const candidate = await userModel.findOne({ email });
        if (candidate) {

            throw ApiError.BadRequestError(`Пользователь с почтой  ${email} уже существует!`);
        }

        const hashPassword = await bcrypt.hash(password, 3);
        const activationLink = uuid.v4();

        const user = await userModel.create({ email, name, password: hashPassword, activationLink });
        await emailService.sendActivationEmail(email, `${process.env.API_URL}/api/activate/${activationLink}`);

        const userDto = new UserDto(user);
        const tokens = tokerService.generateTokens({ ...userDto });
        await tokerService.saveToken(userDto.id, tokens.refreshToken);

        return {
            ...tokens,
            user: userDto
        }
    }

    async activate(activationLink) {
        const user = await userModel.findOne({ activationLink });

        if (!user) {
            throw ApiError.BadRequestError("Ошибка активации!");
        }
        user.isActivated = true;

        await user.save();
    }

    async login(email, password) {
        const user = await userModel.findOne({ email })
        if (!user) {
            throw ApiError.BadRequestError("Пользователь не найден!");
        }

        const checkPassword = await bcrypt.compare(password, user.password);
        if (!checkPassword) {
            throw ApiError.BadRequestError("Неверный пароль!");
        }

        const userDto = new UserDto(user);
        const tokens = await tokerService.generateTokens({ ...userDto });

        await tokerService.saveToken(userDto.id, tokens.refreshToken);

        return {
            ...tokens,
            user: userDto
        }
    }

    async logout(refreshToken) {
        const token = await tokenService.removeToken(refreshToken);
        return token;
    }

    async refresh(refreshToken) {
        if (!refreshToken) {
            throw ApiError.UnauthorizedError();
        }
        const userData = tokenService.validateRefreshToken(refreshToken);
        const tokenFindDB = await tokenService.findToken(refreshToken);
        if (!userData || !tokenFindDB) {
            throw ApiError.UnauthorizedError();
        }


        const user = await userModel.findById(userData.id);
        const userDto = new UserDto(user);
        const tokens = tokerService.generateTokens({ ...userDto });
        await tokerService.saveToken(userDto.id, tokens.refreshToken);

        return {
            ...tokens,
            user: userDto
        }
    }

    async getAllUsers() {
        const users = await userModel.find();
        return users;
    }
}


module.exports = new UserService();