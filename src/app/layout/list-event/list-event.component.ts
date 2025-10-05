import { Component } from '@angular/core';
import {Event} from '../../models/event';

@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.component.html',
  styleUrl: './list-event.component.css'
})
export class ListEventComponent {
  searchTerm: string = '';
events: Event[]=[
  {
  id: 1,
  titre: 'Conférence Tech Angular',
  description: 'Une journée complète dédiée aux nouveautés du framework Angular.',
  date: new Date('2025-11-15T09:00:00'),
  lieu: 'Palais des Congrès, Tunis',
  prix: 75,
  organisateurId: 101,
  imageUrl: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop',
  nbplaces: 200,
  nbrlike: 120
},
{
  id: 2,
    titre: 'Atelier UX/UI Design',
  description: 'Apprenez les bases du design d\'interfaces utilisateur.',
  date: new Date('2025-12-05T14:00:00'),
  lieu: 'Menzah 5, Ariana',
  prix: 50,
  organisateurId: 102,
  imageUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop',
  nbplaces: 50,
  nbrlike: 85
},
{
  id: 3,
    titre: 'Meetup Développeurs Full-Stack',
  description: 'Réseautage et discussions sur les technos du moment.',
  date: new Date('2025-09-20T18:00:00'), // Événement expiré
  lieu: 'Lac 1, Tunis',
  prix: 0,
  organisateurId: 101,
  imageUrl: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop',
  nbplaces: 150,
  nbrlike: 210
}
  ];


  incrementLikes(event: Event): void {
    event.nbrlike++;
  }

  isEventExpired(event: Event): boolean {
    return event.date < new Date();
  }

  get filteredEvents(): Event[] {
    if (!this.searchTerm) {
      return this.events;
    }
    // On filtre sur les nouvelles propriétés : titre et lieu
    return this.events.filter(event =>
      event.titre.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      event.lieu.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }


}
