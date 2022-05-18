package fr.huartgi.jpalearning.core.controller;

import fr.huartgi.jpalearning.core.domain.Club;
import fr.huartgi.jpalearning.core.service.ClubService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@AllArgsConstructor
@RestController
@RequestMapping("/api/club")
public class ClubController {

    private final ClubService clubService;

    @GetMapping(path = "search")
    public ResponseEntity<Iterable<Club>> search() {
        Iterable<Club> clubs = clubService.findAll();
        return clubs.iterator().hasNext() ? ResponseEntity.ok(clubs) : ResponseEntity.noContent().build();
    }

}
