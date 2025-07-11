import { Component, Input } from '@angular/core';
import { Contact } from '../../shared/contact.model';
import { ContactsService } from '../contacts.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'cms-contact-detail',
  standalone: false,
  templateUrl: './contact-detail.component.html',
  styleUrl: './contact-detail.component.css',
})
export class ContactDetailComponent {
  contact: Contact;
  index: number;
  constructor(
    private contactService: ContactsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.index = params['id'];
      this.contact = this.contactService.getContactById(this.index.toString());
    });
  }

  onDelete() {
    this.contactService.deleteContact(this.index);
    this.router.navigate(['/contacts']);
  }
}
