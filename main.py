import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.mime.image import MIMEImage
from flask import Flask, render_template, request,  redirect, url_for
from pymongo import MongoClient

client = MongoClient(
    'mongodb+srv://kristaspace0:ibrgvDzwRm3kD7XW@form-database.eovrsov.mongodb.net/?retryWrites=true&w=majority')
db = client['form_database']
collection = db['form_submissions']



app = Flask(__name__)


@app.route('/Home')
def Home():
    return render_template("index2.html")

@app.route('/registration-form')
def registration_form():
    return render_template("registration-form2.html")



@app.route('/submit-form', methods=['POST', 'GET'])
def submit_form():
    # Extract form data from the request

    name = request.form.get('fullname')
    gender = request.form.get('gender')
    dateofbirth = request.form.get('dateofbirth')
    country = request.form.get('country')
    phone_number = request.form.get('phone-number')
    Email = request.form.get('email')
    city = request.form.get('city')
    resident_country = request.form.get('resident-country')
    message = request.form.get('event-expectations')
    interested_in_icamp = request.form.get('interested-in-icamp')
    skill_of_choice = request.form.get('skill-of-choice')

    print(name)

    # Do something with the form data
    # For example, you can store it in a database or process it in some way
    # Save the form submission to the MongoDB collection
    submission = {'name': name,
                  'gender': gender,
                  'phone_number': phone_number,
                  'country': country,
                  'email': Email,
                  'resident_country': resident_country,
                  'interested_in_icamp': interested_in_icamp,
                  'skill_of_choice': skill_of_choice
                  }
    collection.insert_one(submission)
    # Get the total submissions count
    total_count = collection.count_documents({})
    print(total_count)

    # Redirect to /send_email and pass the data in the request body
    return redirect(url_for('send_email', receiver_email=Email, register_name=name, total_registers=str(total_count)))


def send_email_with_image(sender_email, register_name, sender_password, receiver_email, subject, paragraphs, image_path):
    # Create a multipart message container
    msg = MIMEMultipart()
    msg['From'] = sender_email
    msg['To'] = receiver_email
    msg['Subject'] = subject

    # Create the HTML content of the email
    html = f'''
       <html>
           <body>
               <p>Dear {register_name},</p>
               <p><img src="cid:image"></p>
               {''.join(f"<p>{p}</p>" for p in paragraphs)}
           </body>
       </html>
       '''

    # Attach the HTML content to the email
    msg.attach(MIMEText(html, 'html'))

    # Open the image file
    with open(image_path, 'rb') as image_file:
        # Create a MIME image object
        image = MIMEImage(image_file.read())

        # Define the image ID
        image.add_header('Content-ID', '<image>')
        image.add_header('Content-Disposition', 'inline', filename=image_path)

        # Attach the image to the email
        msg.attach(image)

    # Establish a secure connection with the SMTP server
    server = smtplib.SMTP('smtp.gmail.com', 587)
    server.starttls()

    # Login to the sender's email account
    server.login(sender_email, sender_password)

    # Send the email
    server.send_message(msg)

    # Clean up the connection
    server.quit()


def read_message(file_path, register_name):
    with open(file_path, 'r') as email_text:
        message = email_text.read()
        message = message.replace("[Name]", register_name)
        paragraphs = message.split('\n\n')  # Assuming paragraphs are separated by two newline characters
    return paragraphs


@app.route('/send_email', methods=['GET'])
def send_email():

    if request.method == 'GET':

        receiver_email = request.args.get('receiver_email')
        total_registers = request.args.get("total_registers")
        register_name = request.args.get("register_name")
        print(receiver_email)

        if receiver_email:

            sender_email = 'kristaspace0@gmail.com'
            sender_password = 'pkhmlmmqhpcwjhob'
            subject = 'Congratulations! Your Golden Ticket for "The Next Big Thing" Blockchain Event.'
            image_path = 'krTicket1-2.jpg'
            file_path = "Email_text.txt"

            paragraphs = read_message(file_path, register_name)
            send_email_with_image(sender_email, register_name, sender_password, receiver_email, subject, paragraphs,
                                  image_path)

            print(total_registers)
            return render_template("registration-form2.html")

        else:
            return 'No receiver email provided'
    else:
        return 'Send Email Page'


@app.route('/')
def root():
    return redirect(url_for('Home'))

# Add a catch-all route for handling URL not found errors
@app.errorhandler(404)
def page_not_found(e):
    return "Page not found. Please check the URL.", 404


if __name__ == "__main__":
    app.run(debug=True)
