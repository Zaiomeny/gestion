<?php

namespace App\Models;

use App\Models\Projet;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Acteur extends Model
{
   protected $fillable = [
            'nom_acteur',
            'prenom',
            'adresse',
            'telephone',
            'CIN',
            'projet_id'
    ];
    public function mission(): BelongsTo
    {
        return $this->belongsTo(Projet::class);
    }
}
