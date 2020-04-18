import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MessageModel } from '../../../common/model/message.model';
import { ContactService } from '../services/contact.service';
import { MessageService } from '../../../common/message/message.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit 
{
  loading=false;
  done=false;
  message: string;
  
  /*
  fcObjet: FormControl;
  fcEMail: FormControl;
  fcMessage: FormControl;
*/
  
  messageForm: FormGroup;
  contactForm: FormGroup;

  
  constructor(
    private contactService: ContactService,
    private formBuilder: FormBuilder, 
    private messageService: MessageService
  ) { }

  ngOnInit() 
  {
    this.contactForm = this.formBuilder.group({
        contactFormName: ['', Validators.required],
        contactFormEmail: ['', [Validators.required, Validators.email]],
        contactFormSubject: ['', Validators.required],
        contactFormMessage: ['', Validators.required]
    });
  }

  onReturnToForm()
  {
    this.done=false;
  }

  onSendMessage()
  {

    this.loading=true;
    //const jsondata: string=this.contactForm.value;
    // {nom, sujet, email, message}
    const formValue = this.contactForm.value;
    this.contactService.sendMessage( formValue.contactFormName, formValue.contactFormSubject,
      formValue.contactFormEmail, formValue.contactFormMessage )
        .subscribe( res=>
                {
                    const m: MessageModel=res;
                    console.log('Contact - message received from backend:', m);
                    const message=(m!==null && m !== undefined) ? m.content : '';
                    const code=(m!==null && m !== undefined) ? m.code: '';
                    if(code==='200')
                    {
                      this.done=true;
                      this.messageService.emitMessage('success', 'Message envoyé !');
                    }
                    else if(code === '401')
                    {
                      this.messageService.emitMessage('danger', 'Error:  '+message);
                    }
                    else if(code === '402')
                    {
                      this.messageService.emitMessage('danger', 'Error:  '+message);
                    }
                },
            err=>console.error(err),
            ()=>this.loading=false
        );
  }

}
