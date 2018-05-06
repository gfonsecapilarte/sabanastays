<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class ContactUs extends Mailable
{
    use Queueable, SerializesModels;
    protected $contact;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($contact){
        $this->contact = (object)$contact;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build(){
        return $this->view('emails.contactus')
                ->with([
                    'name'      => $this->contact->name,
                    'email'     => $this->contact->email,
                    'subject'   => $this->contact->subject,
                    'text'      => $this->contact->message
                ]);
    }
}
