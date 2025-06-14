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

import { exists, mapValues } from '../runtime';
import {
    DivinationResultSection,
    DivinationResultSectionFromJSON,
    DivinationResultSectionFromJSONTyped,
    DivinationResultSectionToJSON,
} from './';

/**
 * 
 * @export
 * @interface DivinationResultResponseDto
 */
export interface DivinationResultResponseDto {
    /**
     * 
     * @type {Array<DivinationResultSection>}
     * @memberof DivinationResultResponseDto
     */
    body: Array<DivinationResultSection>;
    /**
     * 
     * @type {string}
     * @memberof DivinationResultResponseDto
     */
    summary: string;
    /**
     * 
     * @type {string}
     * @memberof DivinationResultResponseDto
     */
    title: string;
}

export function DivinationResultResponseDtoFromJSON(json: any): DivinationResultResponseDto {
    return DivinationResultResponseDtoFromJSONTyped(json, false);
}

export function DivinationResultResponseDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): DivinationResultResponseDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'body': ((json['body'] as Array<any>).map(DivinationResultSectionFromJSON)),
        'summary': json['summary'],
        'title': json['title'],
    };
}

export function DivinationResultResponseDtoToJSON(value?: DivinationResultResponseDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'body': ((value.body as Array<any>).map(DivinationResultSectionToJSON)),
        'summary': value.summary,
        'title': value.title,
    };
}


