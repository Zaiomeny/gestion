<?php

namespace App\Models;

use App\Models\Acteur;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Projet extends Model
{
    protected $fillable = [
        'nom_projet',
        'budget',
        'date_du_debut',
        'annee'
    ];
    public function acteurs(): HasMany
    {
        return $this->hasMany(Acteur::class);
    }
}
