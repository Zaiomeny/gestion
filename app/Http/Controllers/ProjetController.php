<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProjetRequest;
use App\Models\Projet;

class ProjetController extends Controller
{
    public function index()
    {
        $projets = Projet::withCount('acteurs')->latest()->paginate(5);
        return inertia('Projets/ProjetsIndex', [
            'projets'=>$projets
        ]);
    }
   
    public function store( ProjetRequest $request)
    {
        Projet::create($request->validated());
        return redirect()->back();
    }
    public function update($projet, ProjetRequest $request)
    {
        Projet::find($projet)->update($request->validated());
        return redirect()->back();
    }
    public function destroy($projet)
    {
        Projet::find($projet)->delete();
        return redirect()->back();
    }
}
