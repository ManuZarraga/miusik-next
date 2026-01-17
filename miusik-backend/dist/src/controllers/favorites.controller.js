"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FavoritesController = void 0;
const common_1 = require("@nestjs/common");
const favorites_service_1 = require("../services/favorites.service");
const auth_guard_1 = require("../auth/auth.guard");
let FavoritesController = class FavoritesController {
    favoritesService;
    constructor(favoritesService) {
        this.favoritesService = favoritesService;
    }
    getUserFavorites(req) {
        return this.favoritesService.getUserFavorites(req.user.id);
    }
    addFavorite(req, songId) {
        return this.favoritesService.addFavorite(req.user.id, songId);
    }
    removeFavorite(req, songId) {
        return this.favoritesService.removeFavorite(req.user.id, songId);
    }
    async isFavorite(req, songId) {
        const isFavorite = await this.favoritesService.isFavorite(req.user.id, songId);
        return { isFavorite };
    }
};
exports.FavoritesController = FavoritesController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FavoritesController.prototype, "getUserFavorites", null);
__decorate([
    (0, common_1.Post)(':songId'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Param)('songId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], FavoritesController.prototype, "addFavorite", null);
__decorate([
    (0, common_1.Delete)(':songId'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Param)('songId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], FavoritesController.prototype, "removeFavorite", null);
__decorate([
    (0, common_1.Get)(':songId/check'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Param)('songId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], FavoritesController.prototype, "isFavorite", null);
exports.FavoritesController = FavoritesController = __decorate([
    (0, common_1.Controller)('favorites'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __metadata("design:paramtypes", [favorites_service_1.FavoritesService])
], FavoritesController);
//# sourceMappingURL=favorites.controller.js.map