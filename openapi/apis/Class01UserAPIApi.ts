/* tslint:disable */
/* eslint-disable */
/**
 * 냥팔자 API 명세
 * 냥파자는 상팔자 어플리케이션을 위한 API 명세서입니다. - 모든 API의 Path는 **\'/api\'로 시작**합니다. - 모든 API의 응답은 **공통 응답 형식**을 가집니다. data에 실제 응답 데이터가 들어갑니다.     ```json     {       \"requestId\": \"서버생성 요청ID\",       \"requestTime\": \"요청시간\",       \"success\": \"성공여부\",       \"data\": {         JSON 데이터       }     }     ```
 *
 * The version of the OpenAPI document: v1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    DefaultResponse,
    DefaultResponseFromJSON,
    DefaultResponseToJSON,
    UserNotificationCategoryDto,
    UserNotificationCategoryDtoFromJSON,
    UserNotificationCategoryDtoToJSON,
    UserResponseDto,
    UserResponseDtoFromJSON,
    UserResponseDtoToJSON,
    UserUpdateRequestDto,
    UserUpdateRequestDtoFromJSON,
    UserUpdateRequestDtoToJSON,
    UserWithdrawalRequestDto,
    UserWithdrawalRequestDtoFromJSON,
    UserWithdrawalRequestDtoToJSON,
} from '../models';

export interface DeleteUserRequest {
    userWithdrawalRequestDto: UserWithdrawalRequestDto;
}

export interface UpdateNotificationSettingsRequest {
    body: object;
}

export interface UpdateUserInfoRequest {
    userUpdateRequestDto: UserUpdateRequestDto;
}

/**
 * 
 */
export class Class01UserAPIApi extends runtime.BaseAPI {

    /**
     * 회원탈퇴를 합니다
     * 회원탈퇴
     */
    async deleteUserRaw(requestParameters: DeleteUserRequest): Promise<runtime.ApiResponse<DefaultResponse>> {
        if (requestParameters.userWithdrawalRequestDto === null || requestParameters.userWithdrawalRequestDto === undefined) {
            throw new runtime.RequiredError('userWithdrawalRequestDto','Required parameter requestParameters.userWithdrawalRequestDto was null or undefined when calling deleteUser.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = typeof token === 'function' ? token("JWT Token", []) : token;

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/user`,
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
            body: UserWithdrawalRequestDtoToJSON(requestParameters.userWithdrawalRequestDto),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => DefaultResponseFromJSON(jsonValue));
    }

    /**
     * 회원탈퇴를 합니다
     * 회원탈퇴
     */
    async deleteUser(requestParameters: DeleteUserRequest): Promise<DefaultResponse> {
        const response = await this.deleteUserRaw(requestParameters);
        return await response.value();
    }

    /**
     * 알림설정을 조회합니다
     * 알림설정 조회
     */
    async getNotificationSettingsRaw(): Promise<runtime.ApiResponse<Array<UserNotificationCategoryDto>>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = typeof token === 'function' ? token("JWT Token", []) : token;

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/user/notification`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(UserNotificationCategoryDtoFromJSON));
    }

    /**
     * 알림설정을 조회합니다
     * 알림설정 조회
     */
    async getNotificationSettings(): Promise<Array<UserNotificationCategoryDto>> {
        const response = await this.getNotificationSettingsRaw();
        return await response.value();
    }

    /**
     * 유저 정보를 조회합니다
     * 유저 정보 조회
     */
    async getUserInfoRaw(): Promise<runtime.ApiResponse<UserResponseDto>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = typeof token === 'function' ? token("JWT Token", []) : token;

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/user`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => UserResponseDtoFromJSON(jsonValue));
    }

    /**
     * 유저 정보를 조회합니다
     * 유저 정보 조회
     */
    async getUserInfo(): Promise<UserResponseDto> {
        const response = await this.getUserInfoRaw();
        return await response.value();
    }

    /**
     * 알림설정을 수정합니다
     * 알림설정 수정
     */
    async updateNotificationSettingsRaw(requestParameters: UpdateNotificationSettingsRequest): Promise<runtime.ApiResponse<DefaultResponse>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling updateNotificationSettings.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = typeof token === 'function' ? token("JWT Token", []) : token;

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/user/notification`,
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.body as any,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => DefaultResponseFromJSON(jsonValue));
    }

    /**
     * 알림설정을 수정합니다
     * 알림설정 수정
     */
    async updateNotificationSettings(requestParameters: UpdateNotificationSettingsRequest): Promise<DefaultResponse> {
        const response = await this.updateNotificationSettingsRaw(requestParameters);
        return await response.value();
    }

    /**
     * 유저 정보를 수정합니다
     * 유저 정보 수정
     */
    async updateUserInfoRaw(requestParameters: UpdateUserInfoRequest): Promise<runtime.ApiResponse<DefaultResponse>> {
        if (requestParameters.userUpdateRequestDto === null || requestParameters.userUpdateRequestDto === undefined) {
            throw new runtime.RequiredError('userUpdateRequestDto','Required parameter requestParameters.userUpdateRequestDto was null or undefined when calling updateUserInfo.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = typeof token === 'function' ? token("JWT Token", []) : token;

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/user`,
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: UserUpdateRequestDtoToJSON(requestParameters.userUpdateRequestDto),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => DefaultResponseFromJSON(jsonValue));
    }

    /**
     * 유저 정보를 수정합니다
     * 유저 정보 수정
     */
    async updateUserInfo(requestParameters: UpdateUserInfoRequest): Promise<DefaultResponse> {
        const response = await this.updateUserInfoRaw(requestParameters);
        return await response.value();
    }

}
