function PersonalInfo() {
  return (
    <>
      <div className="container">
        <div id="dad-info" className="d-flex">
          <div
            className="d-flex justify-content-center align-items-center"
            style={{
              fontSize: 20,
              fontFamily: "Times New Roman",
              paddingRight: 50,
            }}
          >
            Elon Reeve Musk (EE-lon; born June 28, 1971) is a businessman and
            investor. Musk is the founder, chairman, CEO and chief technology
            officer of SpaceX; angel investor, CEO, product architect and former
            chairman of Tesla, Inc.; owner, chairman and CTO of X Corp.; founder
            of the Boring Company and xAI; co-founder of Neuralink and OpenAI;
            and president of the Musk Foundation. He is the wealthiest person in
            the world, with an estimated net worth of US$219 billion as of
            November 2023, according to the Bloomberg Billionaires Index, and
            $241 billion according to Forbes, primarily from his ownership
            stakes in Tesla and SpaceX.[5][6]
          </div>

          <div>
            <img
              src={
                "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iBdBj0QvfR.E/v1/-1x-1.jpg"
              }
              height={250}
              style={{ borderRadius: 5 }}
            />
          </div>
        </div>

        <br />
        <br />
        <br />
        <br />
        <br />

        <div id="uncle-info" className="d-flex">
          <div>
            <img
              src={
                "https://media.licdn.com/dms/image/D5612AQFQpi1Z6qrZxA/article-cover_image-shrink_600_2000/0/1703776731641?e=2147483647&v=beta&t=9AzNi1ae25287Rpt_LVjGne3wAJ7MqblEse0SpGKQm8"
              }
              height={250}
              style={{ borderRadius: 5 }}
            />
          </div>

          <div
            className="d-flex justify-content-center align-items-center"
            style={{
              fontSize: 20,
              fontFamily: "Times New Roman",
              paddingLeft: 50,
            }}
          >
            Ratan Naval Tata (born 28 December 1937) is an Indian industrialist,
            philanthropist and former chairman of Tata Sons. He was a chairman
            of the Tata Group from 1990 to 2012, and interim chairman from
            October 2016 through February 2017. He continues to head its
            charitable trusts.[2][3] In 2008, he received the Padma Vibhushan,
            the second highest civilian honour in India, after receiving the
            Padma Bhushan, the third highest civilian honour in 2000.[4]
          </div>
        </div>
      </div>
    </>
  );
}

export default PersonalInfo;
