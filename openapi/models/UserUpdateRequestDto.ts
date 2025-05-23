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

import { exists } from '../runtime';
/**
 *
 * @export
 * @interface UserUpdateRequestDto
 */
export interface UserUpdateRequestDto {
  /**
   *
   * @type {string}
   * @memberof UserUpdateRequestDto
   */
  birthType?: UserUpdateRequestDtoBirthTypeEnum;
  /**
   * 날짜 (ISO 8601, yyyy-MM-dd)
   * @type {Date}
   * @memberof UserUpdateRequestDto
   */
  birthday?: Date;
  /**
   * 시간 (HH:mm)
   * @type {Date}
   * @memberof UserUpdateRequestDto
   */
  birthtime?: Date;
  /**
   *
   * @type {string}
   * @memberof UserUpdateRequestDto
   */
  email?: string;
  /**
   * 푸시알림을 위한 fcmToken 문자열
   * @type {string}
   * @memberof UserUpdateRequestDto
   */
  fcmToken?: string;
  /**
   *
   * @type {string}
   * @memberof UserUpdateRequestDto
   */
  gender?: UserUpdateRequestDtoGenderEnum;
  /**
   *
   * @type {string}
   * @memberof UserUpdateRequestDto
   */
  name?: string;
}

export function UserUpdateRequestDtoFromJSON(json: any): UserUpdateRequestDto {
  return UserUpdateRequestDtoFromJSONTyped(json, false);
}

export function UserUpdateRequestDtoFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): UserUpdateRequestDto {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    birthType: !exists(json, 'birthType') ? undefined : json['birthType'],
    birthday: !exists(json, 'birthday') ? undefined : new Date(json['birthday']),
    birthtime: !exists(json, 'birthtime') ? undefined : new Date(json['birthtime']),
    email: !exists(json, 'email') ? undefined : json['email'],
    fcmToken: !exists(json, 'fcmToken') ? undefined : json['fcmToken'],
    gender: !exists(json, 'gender') ? undefined : json['gender'],
    name: !exists(json, 'name') ? undefined : json['name'],
  };
}

export function UserUpdateRequestDtoToJSON(value?: UserUpdateRequestDto | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    birthType: value.birthType,
    birthday: value.birthday === undefined ? undefined : value.birthday,
    birthtime: value.birthtime === undefined ? undefined : value.birthtime,
    email: value.email,
    fcmToken: value.fcmToken,
    gender: value.gender,
    name: value.name,
  };
}

/**
 * @export
 * @enum {string}
 */
export enum UserUpdateRequestDtoBirthTypeEnum {
  SOLAR = 'SOLAR',
  LUNAR = 'LUNAR',
  NONE = 'NONE',
}
/**
 * @export
 * @enum {string}
 */
export enum UserUpdateRequestDtoGenderEnum {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
}
