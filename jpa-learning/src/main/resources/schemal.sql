drop table if exists club CASCADE;
drop table if exists country CASCADE;
drop table if exists matchs CASCADE;
drop table if exists player CASCADE;
drop table if exists stadium CASCADE;
drop sequence if exists hibernate_sequence;
create sequence hibernate_sequence start with 1 increment by 1;
create table club (id integer not null, name varchar(255), fk_country bigint, fk_stadium bigint, primary key (id));
create table country (id bigint not null, code varchar(3), name varchar(50), primary key (id));
create table matchs (id bigint not null, goal_away integer, goal_home integer, fk_club_away integer not null, fk_club_home integer not null, primary key (id));
create table player (id bigint not null, birthdate date, name varchar(50) not null, fk_club integer not null, fk_country bigint not null, primary key (id));
create table stadium (id bigint not null, capacity integer, name varchar(255), primary key (id));
alter table club add constraint FK7syjecp1a87lp35fdyxtputl4 foreign key (fk_country) references country;
alter table club add constraint FK2vk39ejbtaosqgv8h1wvpbw7n foreign key (fk_stadium) references stadium;
alter table matchs add constraint FKgakp3khyr2t7laljbxgmekabr foreign key (fk_club_away) references club;
alter table matchs add constraint FKo0xkl1as103ihovkwuoedqogd foreign key (fk_club_home) references club;
alter table player add constraint FK50ehyqcrhk0ao0ujnsloevpjd foreign key (fk_club) references club;
alter table player add constraint FKt98517d41v5blc8jl6tpgmy1p foreign key (fk_country) references country;

