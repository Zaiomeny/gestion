<?php

namespace App\Http\Controllers;

use App\Http\Requests\ActeurRequest;
use App\Models\Acteur;
use App\Models\Projet;

class ActeurController extends Controller
{
    public function index($projet)
    {   
        $projet = Projet::find($projet);
        $acteurs = $projet->acteurs()->paginate(5);
        return inertia('Acteurs/ActeursIndex',[
            'projet' => $projet,
            'acteurs' => $acteurs
        ]); 
    }
    public function store($projet, ActeurRequest $request)
    {
        $projet = Projet::Find($projet);
        if($projet){
            Acteur::create($request->validated());
        }
    }
    public function update($acteur, ActeurRequest $request)
    {
        Acteur::find($acteur)->update($request->validated());
    }
    
    public function destroy($acteur)
    {
        Acteur::find($acteur)->delete();
    }
}
