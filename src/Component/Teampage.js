import React from "react";

const Teampage = () => {
  
  return (
    <div className="App">

      <header className="App-header">
        <h1>Team Page</h1>
      </header>

      <div className="header">
        <h2>Learn from Scientist, reachers scholors from the top institute in the world</h2>
      </div>

      <main className="App-content">

        <section className="university">
          <img src="https://static.thenounproject.com/png/213486-200.png" alt="uni"/>
          <p>Cambridge University</p>
        </section>

        <section className="university">
          <img src="https://static.thenounproject.com/png/213486-200.png" alt="uni"/>
          <p>Harvard University</p>
        </section>

        <section className="university">
          <img src="https://static.thenounproject.com/png/213486-200.png" alt="uni"/>
          <p>University of California</p>
        </section>

        <section className="university">
          <img src="https://static.thenounproject.com/png/213486-200.png" alt="uni"/>
          <p>ETH Zurich</p>
        </section>

        <section className="university">
          <img src="https://static.thenounproject.com/png/213486-200.png" alt="uni"/>
          <p>University of Edinburgh</p>
        </section>

        <section className="university">
          <img src="https://static.thenounproject.com/png/213486-200.png" alt="uni"/>
          <p>Michigan State University</p>
        </section>

        <section className="university">
          <img src="https://static.thenounproject.com/png/213486-200.png" alt="uni"/>
          <p>Humboldt University Berlin</p>
        </section>

        <section className="university">
          <img src="https://static.thenounproject.com/png/213486-200.png" alt="uni"/>
          <p>Johns Hopkins University</p>
        </section>

      </main>

      <div className="article-head">
      <h2>Meet your mentors</h2>
      <p>Our<br/>Awesome Team</p>
      </div>

      <article className="main-article">

        <section className="mentors">
          <img src="https://cdn-icons-png.flaticon.com/512/167/167752.png" alt="mentor"/>
          <p>Shubham</p>
          <p>California University, UK</p>
        </section>

        <section className="mentors">
          <img src="https://cdn-icons-png.flaticon.com/512/167/167752.png" alt="mentor"/>
          <p>Siddhart Bhatt</p>
          <p>IISER Thiruvananthapuram</p>
        </section>

        <section className="mentors">
          <img src="https://cdn-icons-png.flaticon.com/512/167/167752.png" alt="mentor"/>
          <p>Saumya Prakash</p>
          <p>NISER</p>
        </section>

        <section className="mentors">
          <img src="https://cdn-icons-png.flaticon.com/512/167/167752.png" alt="mentor"/>
          <p>Piyush Verma</p>
          <p>IISER Pune</p>
        </section>

        <section className="mentors">
          <img src="https://cdn-icons-png.flaticon.com/512/167/167752.png" alt="mentor"/>
          <p>Aditya Nayak</p>
          <p>IISER Mohali</p>
        </section>

        <section className="mentors">
          <img src="https://cdn-icons-png.flaticon.com/512/167/167752.png" alt="mentor"/>
          <p>Parth Kumar Singh</p>
          <p>IIT,Jodhpur</p>
        </section>

      </article>

      <div id="ft-head"><h1>Our Teams</h1></div>
      <div id="foot"><h3>Fully dedicated for future scientist</h3></div>
      
      <footer className="App-footer">

        <section className="advisor">
          <img className="pro" src="https://www.sciastra.com/teams/dr_omkar.jpg"alt="advisor"/>
          <p><strong>Mentor & Advisor </strong></p>
          <p><strong>Pr. Omkar</strong></p> 
          <p>Principal project Scientist</p>
          <p>IIT-Madras</p>  
        </section>

        <section className="advisor">
          <img className="founder" src="https://www.sciastra.com/teams/vivek_dwivedi_niser.jpg" alt="advisor"/>
          <p><strong>Vivek Dwivedi</strong></p>
          <p>Founder SciAstra, Mentor, Qualified NEST, JEE advanced, Mains, Master's Student at NISER</p>
            <button className="btn">
              Message him now 
              <img src="https://cdn-icons-png.flaticon.com/128/11049/11049092.png"alt="msg-btn"/>
            </button>
        </section>

        <section className="advisor">
          <img className="lead" src="https://www.sciastra.com/teams/akhil_tripathi_niser.jpg" alt="advisor"/>
          <p><strong>Akhil Tripathi</strong></p>
          <p>Cofounder SciAstra, Mentor, Qualified NEST, Master's Student at NISER</p>
            <button className="btn">
              Message him now
              <img src="https://cdn-icons-png.flaticon.com/128/11049/11049092.png" alt="msg-btn"/>
            </button>
        </section>

      </footer>
    </div>
  );
};

export default Teampage;
