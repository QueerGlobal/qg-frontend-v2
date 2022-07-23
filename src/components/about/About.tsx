import React, { FC } from "react";
import { 
	AboutContainer,
	MiddleDiv,
	Header,
	Paragraph,
	TahuFont,
	AboutMain, 
	DnDImg,
	WhiteBGSection, 
	PurpleSpan, 
	DarkGreyBGSection,
	UnitedSection,
	UnitedImgGrid,
	UnitedImg,
	UnitedDesc,
	FamilyImgGrid,
	FamilyImg } from './About.css';
import Background from '../common/background/Background';
import placeholder from '../../assets/misc/placeholder.jpeg';
import Button from '../common/button/Button';

const About: FC = () => {
	const unitedSectionImgs = [
		{
			key: "1a",
			src: placeholder,
			alt: "img"
		},
		{
			key: "2b",
			src: placeholder,
			alt: "img"
		},
		{
			key: "3c",
			src: placeholder,
			alt: "img"
		},
		{
			key: "4d",
			src: placeholder,
			alt: "img"
		},
		{
			key: "5e",
			src: placeholder,
			alt: "img"
		},
		{
			key: "6f",
			src: placeholder,
			alt: "img"
		},
		{
			key: "7g",
			src: placeholder,
			alt: "img"
		},
		{
			key: "8h",
			src: placeholder,
			alt: "img"
		},
		{
			key: "9i",
			src: placeholder,
			alt: "img"
		}
	];
	
	const familySectionImgs = [
		{
			key: "1a",
			src: placeholder,
			alt: "img"
		},
		{
			key: "2b",
			src: placeholder,
			alt: "img"
		},
		{
			key: "3c",
			src: placeholder,
			alt: "img"
		},
		{
			key: "4d",
			src: placeholder,
			alt: "img"
		},
		{
			key: "5e",
			src: placeholder,
			alt: "img"
		},
		{
			key: "6f",
			src: placeholder,
			alt: "img"
		},
		{
			key: "7g",
			src: placeholder,
			alt: "img"
		},
		{
			key: "8h",
			src: placeholder,
			alt: "img"
		},
		{
			key: "9i",
			src: placeholder,
			alt: "img"
		},
		{
			key: "10j",
			src: placeholder,
			alt: "img"
		},
		{
			key: "11k",
			src: placeholder,
			alt: "img"
		},
		{
			key: "12l",
			src: placeholder,
			alt: "img"
		},
		{
			key: "13m",
			src: placeholder,
			alt: "img"
		},
		{
			key: "14n",
			src: placeholder,
			alt: "img"
		},
		{
			key: "15o",
			src: placeholder,
			alt: "img"
		},
		{
			key: "16p",
			src: placeholder,
			alt: "img"
		},
		{
			key: "17q",
			src: placeholder,
			alt: "img"
		},
		{
			key: "18r",
			src: placeholder,
			alt: "img"
		},
		{
			key: "19s",
			src: placeholder,
			alt: "img"
		},
		{
			key: "20t",
			src: placeholder,
			alt: "img"
		},
		{
			key: "21u",
			src: placeholder,
			alt: "img"
		},
		{
			key: "22v",
			src: placeholder,
			alt: "img"
		},
		{
			key: "23w",
			src: placeholder,
			alt: "img"
		},
		{
			key: "24x",
			src: placeholder,
			alt: "img"
		}
	];

	return (
		<>
			<Background />
			
			<AboutMain>
				<WhiteBGSection>
					<h2>ABOUT US.</h2>
					<p>We support and prioritize the people who are least represented in an outside of the rainbow umbrella. We want to give the community a safe, inviting space to confidently be themselves, easily find accurate, trusted information, share common experiences, and have the ability to support other LGBTQIA+ people and businesses in their area.</p>
			
					<h2>WE ARE <PurpleSpan>united</PurpleSpan>.</h2>
					<UnitedSection>
						<UnitedImgGrid>
							{
								unitedSectionImgs.map((items: any) => {
									return <UnitedImg key={items.key} src={items.src} alt={items.alt} />
								})
							}
						</UnitedImgGrid>

						<UnitedDesc>
							<p>We are Black. We are Latinx. We are Asian, Middle Eastern, White, Bi and Multi-Racial. We are tall, short, curvy, plus size, fat. We use chairs, canes, crutches, lifts, and braces.</p>

							<p><strong>And we believe that kind of diversity is what makes Queerness beautiful.</strong></p>

							<p>We strive to be a place where ALL people can talk about the solutions they found to specific crises in their lives, so other people do not have to go through them as well. A place where people do not have to fear outing themselves to coworkers and friends who follow them when discussing physical limitations, needs for legal advice, future medical procedures, or their financial situations. Queer Global is a worldwide masterlist for marginalized peoples in the Queer community.</p>
						</UnitedDesc>
					</UnitedSection>

					<h2>WE ARE <PurpleSpan>proud</PurpleSpan>.</h2>
					<p>Queer Global is run by a Black trans/pan/poly/not-so-able-bodied man and a multi-racial pan/poly musician, business owner, stylist and vintage clothing expert.</p>
			
					<p>Our goal is to provide a platform that consolidates resources and information for people outside of the Big 5 social media platforms, where it gets buried in posts, behind locked accounts and manipulative algorithms.</p>

					<p>We embraced the transparency of shared community advice and information. With all the resources you need at your fingertips, we hope you can be confident in just being yourself every day.</p>

					<p>We believe providing information is only the beginning & we're just getting started.</p>

					<em>Deacon & D'Arcy</em>
					<DnDImg src={placeholder} alt="Deacon and D'Arcy" />
				</WhiteBGSection>

				<DarkGreyBGSection>
					<h2>WE ARE <PurpleSpan>family</PurpleSpan>.</h2>
					<small>Our amazing volunteers!</small>

					<FamilyImgGrid>
						{
							familySectionImgs.map((items: any) => {
								return <FamilyImg key={items.key} src={items.src} alt={items.alt} />
							})
						}
					</FamilyImgGrid>

					<small>We're all different, but still all the same. Our family is always growing.</small>
      				<Button label='primary' buttonText='SEE VOLUNTEER OPPORTUNITIES' handleClick={() => window.location.href = "/volunteer"} />
					
					<small>We want YOU to feel represented and worthy as you are. The people you see on our site are real Queer Global members. Want to join them?</small>
      				<Button label='primary' buttonText='SEND US YOUR PHOTO OR ARTWORK' handleClick={() => window.location.href = "/submit-artwork"} />
			
					<h2>WE ARE HERE FOR <PurpleSpan>you</PurpleSpan>.</h2>
					<p>We do our best to provide up-to-date, accurate resources and information, but we could always use a helping hand. If you know of any helpful resources, please help us and the rest of our community out and add them.</p>
      				<Button label='primary' buttonText='ADD A RESOURCE' handleClick={() => window.location.href = "/add-a-resource"} />
				</DarkGreyBGSection>
			</AboutMain>
		</>
	);
};

export default About;
