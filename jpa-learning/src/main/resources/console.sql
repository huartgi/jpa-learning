


-- Cache loaded at beginning
select * from country country0_;
select * from stadium stadium0_;
-- Retrieving Clubs with 1, 2
select * from club club0_ where club0_.id in (? , ?);
select * from stadium stadium0_ where stadium0_.id=?;
select * from stadium stadium0_ where stadium0_.id=?;




-- Loading cache at startup
select * from country country0_;
-- Retrieving Clubs with 1, 2 joining with stadium
select * from club club0_ inner join stadium stadium1_ on club0_.fk_stadium=stadium1_.id where club0_.id in (? , ?);



-- Cache loaded at beginning
select * from country country0_
-- Retrieving Clubs with 1, 2 joining with stadium
select * from club club0_ where club0_.id in (? , ?)
