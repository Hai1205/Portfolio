import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p className="text-left tracking-normal leading-relaxed">
            <div>
              Hi Everyone, I am <span className="purple">Hai Nguyen </span>
              from <span className="purple"> Ho Chi Minh City, Viet Nam.</span>
            </div>

            <br />

            <div>
              I am a Information Technology student at Saigon University with a
              strong passion for software development. I am enjoyable about
              continuous learning and applying technical knowledge to real-world
              projects. I have actively participated in and led several
              development projects and you can see them in my GitHub profile.
            </div>

            <br />

            <div>
              With solid teamwork and communication skills, I am seeking an
              internship opportunity in a professional environment where I can
              further enhance my technical expertise and contribute to
              organizational success.
            </div>
          </p>

          <p className="text-[#9b7eac] mt-4">
            &quot;Your start doesn&apos;t define your end.&quot;{" "}
          </p>

          <footer className="blockquote-footer">Hai Nguyen</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
