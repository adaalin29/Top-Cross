<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;


class PaymentLink extends Mailable
{
    use Queueable, SerializesModels;
  
    public $message = false;
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($message)
    {
      $this->message = $message;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->markdown('emails.payment');
    }
}
