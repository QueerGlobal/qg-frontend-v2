import React, { FC } from "react";
import monthlyDonations, {donationSvcs} from "./donate-interfaces";
import Button from "../common/button/Button";

const Donate: FC = () => {
	return (
		<div>
			<header>SUPPORT US</header>
			{donationSvcs.map((svc: any) => {
				let item = `${svc.url}/${svc.qgProfile}`;

				return <div key={svc.title} className="donation-svc">
					<Button label="primary" buttonText={item}>
						{svc.thumb}
						<br />
						{svc.title}
					</Button>
				</div>;
			})}
			<Button buttonText="SET UP MONTHLY DONATIONS" label='primary' />
			<Button buttonText={`DONATE ${monthlyDonations.qty1}`} label='primary' />
			<Button buttonText={`DONATE ${monthlyDonations.qty2}`} label='primary' />
			<Button buttonText={`DONATE ${monthlyDonations.qty3}`} label='primary' />
			<Button buttonText="SEE VOLUNTEER OPPORTUNITIES" label='primary' />
		</div>
	);
};

export default Donate;
