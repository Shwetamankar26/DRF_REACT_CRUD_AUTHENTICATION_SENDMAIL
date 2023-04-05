from django.core.mail import EmailMessage


class Send_Mail():
    @staticmethod
    def send_mail (subject,body,to):
        mail = EmailMessage(subject=subject,body=body,to=to)
        mail.send()
