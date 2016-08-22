import React from 'react';

class AboutContainer extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'AboutContainer';
    }
    render() {
        return(
        <div className="container" style={{paddingBottom:"30px"}}>
	        <h2 style={{textDecoration:"underline"}}>About Us</h2>
	        <p>Finger Toy Soldiers was founded in 2011 by Jerry Finger and Jonathan Finger 
	        with the goal of offering Toy Soldier collectors and enthusiasts a broad selection 
	        of quality toy soldiers from around the world.  We expect to be adding more of our 
	        inventory to our site during 2012. We hope that you will check our site frequently 
	        for new and interesting items as the year moves forward.</p>
	        <h3 style={{textDecoration:"underline"}}>Our People</h3>
			<p><span style={{fontWeight:"300"}}>Jerry E. Finger</span>, founder, has been an avid toy soldier collector since his early 
			years when he used to receive a set of toy soldiers as a birthday or holiday gift.  
			As a student of history and a former U.S. Naval officer, Jerry has a deep knowledge of 
			many of the sets that we offer on our site.   When travelling around the world, he has 
			always sought out toy soldier merchants and manufacturers with the goal of expanding his 
			knowledge as well as our inventory offerings. In addition to his background as an avid 
			toy soldier enthusiast, Jerry Finger has been a successful businessman, philanthropist 
			and community leader in the Houston, Texas area.  He is the Managing Partner of Finger 
			Interests, Ltd. and has over 35 years of business experience in commercial banking, real 
			estate finance and development and principal investing.  For the majority of his career, 
			he was as the Founder, Chairman and Chief Executive of Charter Bancshares, Inc. (“Charter”),
			a commercial bank which he founded in Houston, Texas in 1963.  Charter was engaged in 
			commercial, consumer and real estate lending in the Greater Houston area.  Through growth 
			and acquisitions, Charter grew to nearly $1 billion in total assets before merging with 
			NationsBank in 1996.  From 1996 to 2003, Mr. Finger served as Vice Chairman of 
			NationsBank/Bank of America – Texas.  In addition to his career in commercial banking, Mr. 
			Finger has been a significant developer, financier and owner of commercial real estate in the 
			Gulf Coast region.  He has been (and currently serves as) an Adjunct Professor at the Jones 
			Graduate School of Business at Rice University since 1998 in the subjects of Real Estate and 
			Entrepreneurship.  
			He has served on a number of public company boards and currently serves as a Director or 
			Chairman of numerous civic, philanthropic and educational organizations.   
			He served in the U.S. Navy from 1954 to 1956, and is a graduate of the Wharton School at 
			the University of Pennsylvania.</p>
			<p>Jonathan S. Finger, co-founder, is responsible for the day to day operations of Finger 
			Toy Soldiers, and has been involved in developing new sets of toy soldiers for over 10 years.  

			In addition to his background in the toy soldier area, Jonathan S. Finger is a Partner and 
			Vice President of Finger Interests, Ltd. and has over 20 years of business experience in 
			commercial banking, investment banking, fiduciary and investment management services, 
			insurance and principal investing.  The majority of his career has been in investment management 
			and fiduciary services both on behalf of clients and affiliated entities.   Prior to joining Finger 
			Interests, Ltd. in 1997, Mr. Finger was Senior Vice President of Investment Management and Trust 
			Services at Charter National Bank from 1990 to 1997.  During his tenure, total assets of the investment 
			management and trust area grew from $30 million in 1991 to $300 million in 1997.  In addition, Mr. Finger 
			was responsible for International Banking, Retail Brokerage Services and Investor Relations at 
			Charter during that period.  Prior to joining Charter, Mr. Finger worked at Drexel Burnham Lambert in 
			New York as an investment banking analyst in the Financial Institutions Group, and later as an 
			associate in the Merger and Acquisitions Department.  He is a graduate of the University of Virginia 
			and received his M.B.A. from the Wharton School at the University of Pennsylvania.  He is active in 
			the community, and serves on the board of various civic or philanthropic organizations</p>

			<h3 style={{textDecoration:"underline"}}>Our Pledge</h3>
			<p>As a merchant, our goal is to meet the needs of our customers by offering quality products 
			at fair prices.  We will make every reasonable effort to achieve this goal.  We welcome your 
			feedback on our service, selection of items or prices. </p>


        </div>
        );
    }
}

export default AboutContainer;
