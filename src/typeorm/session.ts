// import {ISession} from 'connect-typeorm';
// import {Column,Entity, Index , PrimaryColumn} from 'typeorm';
// import { TokenServiceOptions } from "../constants/service-constants";

// @Entity({name:'sessions'})
// export class SessionEntity implements ISession{
//     @Index()
//     @Column("bigint")
//     expiredAt=TokenServiceOptions.jwt.expirationTime;

//     @PrimaryColumn('varchar', {length:255})
//     id='';

//     @Column('text')
//     json='';
// }