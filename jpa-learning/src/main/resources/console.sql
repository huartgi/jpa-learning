select club0_.id          as id1_0_0_,
       club0_.fk_country  as fk_count3_0_0_,
       club0_.name        as name2_0_0_,
       club0_.fk_stadium  as fk_stadi4_0_0_,
       country1_.id       as id1_1_1_,
       country1_.code     as code2_1_1_,
       country1_.name     as name3_1_1_,
       stadium2_.id       as id1_4_2_,
       stadium2_.capacity as capacity2_4_2_,
       stadium2_.name     as name3_4_2_
from club club0_
         inner join country country1_ on club0_.fk_country = country1_.id
         inner join stadium stadium2_ on club0_.fk_stadium = stadium2_.id
where club0_.id = ?
