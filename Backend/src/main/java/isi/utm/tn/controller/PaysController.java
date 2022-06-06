package isi.utm.tn.controller;

import isi.utm.tn.model.Pays;
import isi.utm.tn.services.PaysService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")

@RequestMapping("/api/test")
public class PaysController {
    @Autowired
    private PaysService service;

    @PostMapping("/Pays")
    public Pays addPays(@RequestBody Pays Pays) {
        return service.savePays(Pays);
    }

    @GetMapping("/Pays")
    public List<Pays> findAllPayss() {
        return service.getPayss();
    }

    @GetMapping("/Pays/{id}")
    public Pays findPaysById(@PathVariable long id) {
        return service.getPaysById(id);
    }

    @DeleteMapping("/Pays/{id}")
    public String deletePays(@PathVariable long id) {
        return service.deletePays(id);
    }

    @PutMapping("/updatePays")
    public Pays updatePays(@RequestBody Pays Pays) {
        return service.updatePays(Pays);
    }


}
