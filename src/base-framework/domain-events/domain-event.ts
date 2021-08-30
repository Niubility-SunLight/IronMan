/*
 * @Author: your name
 * @Date: 2021-08-30 16:41:18
 * @LastEditTime: 2021-08-30 17:09:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /IronMan/src/base-framework/domain-events/domain-event.ts
 */


export abstract class DomainEvent{
    private readonly occurredDate = new Date();
}