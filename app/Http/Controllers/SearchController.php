<?php

namespace App\Http\Controllers;

use App\Models\Acteur;
use App\Models\Projet;

class SearchController extends Controller
{
    public function __invoke(string $keyword)
    {
        $projets = Projet::where('nom_projet', 'LIKE', '%' . $keyword . '%')
            ->orWhere('budget', 'LIKE', '%' . $keyword . '%')
            ->orWhere('annee', 'LIKE', '%' . $keyword . '%')
            ->orWhere('date_du_debut', 'LIKE', '%' . $keyword . '%')
            ->withCount(['acteurs'])
            ->get();
        $acteurs = Acteur::where('nom_acteur', 'LIKE', '%' . $keyword . '%')
            ->orWhere('prenom', 'LIKE', '%' . $keyword . '%')
            ->orWhere('adresse', 'LIKE', '%' . $keyword . '%')
            ->orWhere('telephone', 'LIKE', '%' . $keyword . '%')
            ->orWhere('CIN', 'LIKE', '%' . $keyword . '%')
            ->get();
        return inertia('Search/SearchIndex', [
            'projets' => $projets,
            'acteurs' => $acteurs
        ]);
    }
}
