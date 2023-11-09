import { useState } from "react";
import {
  Autocomplete,
  TextField,
  Icon,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import ParisCardContainer from "../components/paris-card-container";
import GreeceContainer from "../components/greece-container";
import RecommendedHolidaysCard from "../components/recommended-holidays-card";
import HotelCardContainer from "../components/hotel-card-container";
import HotelCardForm from "../components/hotel-card-form";
import VariantContainedSizeLarge from "../components/variant-contained-size-large";
import styles from "./index.module.css";

const CoverFrame = () => {
  const [dateFieldDateTimePickerValue, setDateFieldDateTimePickerValue] =
    useState(null);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className={styles.coverFrame}>
        <img className={styles.frameIcon} alt="" src="/frame@2x.png" />
        <div className={styles.frame}>
          <div className={styles.frame1}>
            <div className={styles.homepage}>
              <div className={styles.heroSection}>
                <header className={styles.topHeader}>
                  <div className={styles.topContainer}>
                    <img
                      className={styles.fickleflightLogoIcon}
                      alt=""
                      src="/fickleflight-logo.svg"
                    />
                  </div>
                  <div className={styles.navigationMenu}>
                    <div className={styles.explore}>Explore</div>
                    <div className={styles.search}>Search</div>
                    <div className={styles.hotels}>Hotels</div>
                    <div className={styles.offers}>Offers</div>
                  </div>
                  <div className={styles.accountSection}>
                    <img
                      className={styles.hamburgerMenuIcon}
                      alt=""
                      src="/notification.svg"
                    />
                    <img
                      className={styles.notificationBellIcon}
                      alt=""
                      src="/notification1.svg"
                    />
                    <img
                      className={styles.unsplashd1upkifd04aIcon}
                      alt=""
                      src="/top_avatar@2x.png"
                    />
                  </div>
                </header>
                <div className={styles.searchSection}>
                  <div className={styles.searchContainer}>
                    <div className={styles.title}>
                      <div
                        className={styles.letsExplore}
                      >{`Let’s explore & travel the world`}</div>
                      <div className={styles.findTheBest}>
                        Find the best destinations and the most popular stays!
                      </div>
                    </div>
                    <div className={styles.searchForm}>
                      <div className={styles.inputsRow}>
                        <div className={styles.inputGroup}>
                          <Autocomplete
                            className={styles.departureField}
                            size="medium"
                            disablePortal
                            options={[
                              "Singapore (SIN)",
                              "Sydney (SYD)",
                              "Siem Reap (REP)",
                              "Shanghai (PVG)Sanya (SYX)",
                            ]}
                            renderInput={(params) => (
                              <TextField
                                {...params}
                                color="primary"
                                label="Departure"
                                variant="outlined"
                                placeholder=""
                                helperText=""
                              />
                            )}
                            defaultValue="Singapore -  Changi (SIN)"
                          />
                        </div>
                        <div className={styles.inputGroup}>
                          <div className={styles.arrivalField}>
                            <div className={styles.input}>
                              <div className={styles.labelContainer}>
                                <div className={styles.arrival}>Arrival</div>
                              </div>
                              <div className={styles.active}>
                                <div className={styles.muiautocompletetag}>
                                  <div className={styles.chip}>
                                    <div className={styles.container}>
                                      <div className={styles.avatar}>
                                        <div className={styles.op}>F</div>
                                      </div>
                                      <div className={styles.typography}>
                                        <div className={styles.chip1}>Chip</div>
                                      </div>
                                      <img
                                        className={styles.notificationBellIcon}
                                        alt=""
                                        src="/cancel.svg"
                                      />
                                    </div>
                                  </div>
                                  <div className={styles.chip}>
                                    <div className={styles.container}>
                                      <div className={styles.avatar}>
                                        <div className={styles.op}>F</div>
                                      </div>
                                      <div className={styles.typography}>
                                        <div className={styles.chip1}>Chip</div>
                                      </div>
                                      <img
                                        className={styles.notificationBellIcon}
                                        alt=""
                                        src="/cancel.svg"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className={styles.losAngelesLa}>
                                  Los Angeles (LA)
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.inputGroup}>
                          <div className={styles.departureField}>
                            <DatePicker
                              label="Date"
                              value={dateFieldDateTimePickerValue}
                              onChange={(newValue) => {
                                setDateFieldDateTimePickerValue(newValue);
                              }}
                              slotProps={{
                                textField: {
                                  variant: "outlined",
                                  size: "medium",
                                  fullWidth: true,
                                  color: "primary",
                                },
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className={styles.buttonGroup}>
                        <div className={styles.searchFlightsButton}>
                          <div className={styles.button}>Search flights</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.homeContents}>
                <div className={styles.upcomingFlightSection}>
                  <b className={styles.upcomingFlight}>Upcoming Flight</b>
                  <div className={styles.flightDetails}>
                    <div className={styles.flightMainContainer}>
                      <div className={styles.toAndFrom}>
                        <div className={styles.fromDetails}>
                          <b className={styles.sin}>SIN</b>
                          <div className={styles.singapore}>Singapore</div>
                        </div>
                        <div className={styles.duration}>
                          <img
                            className={styles.durationChild}
                            alt=""
                            src="/group-17.svg"
                          />
                          <b className={styles.h55m}>15H 55M</b>
                        </div>
                        <div className={styles.toDetails}>
                          <b className={styles.lax}>LAX</b>
                          <div className={styles.losAngeles}>Los Angeles</div>
                        </div>
                      </div>
                      <div className={styles.horizontalLine} />
                      <div className={styles.departureDetails}>
                        <div className={styles.departsOn1}>
                          Departs on: 1 May, 08:00 AM
                        </div>
                        <div className={styles.daysToGoContainer}>
                          <b>4 days</b>
                          <span> to go</span>
                        </div>
                      </div>
                    </div>
                    <div className={styles.lineSeparator} />
                    <div className={styles.prepareMenu}>
                      <div className={styles.upcomingFlight}>
                        Prepare for your trip
                      </div>
                      <div className={styles.tripMenus}>
                        <button className={styles.hotel}>
                          <img
                            className={styles.hotelChild}
                            alt=""
                            src="/group-21.svg"
                          />
                          <div className={styles.hotel1}>Hotel</div>
                        </button>
                        <button className={styles.hotel}>
                          <img
                            className={styles.attractionsChild}
                            alt=""
                            src="/frame-21.svg"
                          />
                          <div className={styles.attractions1}>Attractions</div>
                        </button>
                        <button className={styles.hotel}>
                          <img
                            className={styles.hotelChild}
                            alt=""
                            src="/group-211.svg"
                          />
                          <div className={styles.eats1}>Eats</div>
                        </button>
                        <button className={styles.hotel}>
                          <img
                            className={styles.attractionsChild}
                            alt=""
                            src="/frame-211.svg"
                          />
                          <div className={styles.commute1}>Commute</div>
                        </button>
                        <button className={styles.hotel}>
                          <img
                            className={styles.taxiChild}
                            alt=""
                            src="/frame-212.svg"
                          />
                          <div className={styles.taxi1}>Taxi</div>
                        </button>
                        <button className={styles.hotel}>
                          <img
                            className={styles.attractionsChild}
                            alt=""
                            src="/frame-213.svg"
                          />
                          <div className={styles.movies1}>Movies</div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.popDestinationsMain}>
                  <div className={styles.destinationsTitles}>
                    <div className={styles.titleContainer}>
                      <b className={styles.upcomingFlight}>
                        Plan your next trip
                      </b>
                      <b className={styles.mostPopularDestinations}>
                        Most Popular Destinations
                      </b>
                    </div>
                    <a className={styles.viewAllTop}>
                      <div className={styles.viewAllDestinations}>
                        View all destinations
                      </div>
                      <img
                        className={styles.notificationBellIcon}
                        alt=""
                        src="/arrowright.svg"
                      />
                    </a>
                  </div>
                  <div className={styles.cardsContainer}>
                    <ParisCardContainer
                      destinationPrice="Paris"
                      destinationPriceText="$699"
                    />
                    <GreeceContainer
                      destinationPrice="Greece"
                      destinationPriceGreece="$1079"
                    />
                    <ParisCardContainer
                      destinationPrice="Norway"
                      destinationPriceText="$895"
                      propBackgroundImage="url('/frame-698@3x.png')"
                    />
                    <GreeceContainer
                      destinationPrice="Tuscany"
                      destinationPriceGreece="$1245"
                      propBackgroundImage="url('/frame-699@3x.png')"
                      propPadding="var(--padding-0) 0.000003814697265625px var(--padding-0) var(--padding-0)"
                      propBoxSizing="border-box"
                    />
                  </div>
                  <div className={styles.viewAllBottom}>
                    <div className={styles.viewAllDestinations1}>
                      View all destinations
                    </div>
                    <img
                      className={styles.notificationBellIcon}
                      alt=""
                      src="/arrowright.svg"
                    />
                  </div>
                </div>
                <div className={styles.recommendedHolidaysContainer}>
                  <div className={styles.recTitle}>
                    <b className={styles.recommendedHolidays}>
                      Recommended Holidays
                    </b>
                    <a className={styles.viewAllHolidaysParent}>
                      <div className={styles.viewAllHolidays}>
                        View all holidays
                      </div>
                      <img
                        className={styles.notificationBellIcon}
                        alt=""
                        src="/arrowright1.svg"
                      />
                    </a>
                  </div>
                  <div className={styles.recCardsContainer}>
                    <RecommendedHolidaysCard
                      locationImageUrl="/unsplash5mv818tzxeo@2x.png"
                      destinationName="Bali"
                      packageDuration="4D3N"
                      price="$899"
                    />
                    <RecommendedHolidaysCard
                      locationImageUrl="/unsplashj82dskoxvy8@2x.png"
                      destinationName="Switzerland"
                      packageDuration="6D5N"
                      price="$900"
                    />
                    <RecommendedHolidaysCard
                      locationImageUrl="/unsplash4ezkckxolre@2x.png"
                      destinationName="Boracay"
                      packageDuration="5D4N"
                      price="$699"
                    />
                    <RecommendedHolidaysCard
                      locationImageUrl="/unsplashuyqmxhjr3ne@2x.png"
                      destinationName="Palawan"
                      packageDuration="4D3N"
                      price="$789"
                    />
                  </div>
                  <div className={styles.viewAllBottom1}>
                    <div className={styles.viewAllHolidays1}>
                      View all holidays
                    </div>
                    <img
                      className={styles.notificationBellIcon}
                      alt=""
                      src="/arrowright1.svg"
                    />
                  </div>
                </div>
                <form className={styles.popularStays}>
                  <div className={styles.popularStaysHeader}>
                    <b className={styles.popularStays1}>Popular Stays</b>
                    <a className={styles.viewAllStaysParent}>
                      <div className={styles.viewAllStays}>View all stays</div>
                      <img
                        className={styles.notificationBellIcon}
                        alt=""
                        src="/arrowright2.svg"
                      />
                    </a>
                  </div>
                  <div className={styles.hotelCards}>
                    <HotelCardContainer
                      propertyDimensions="/unsplashhhrfsdwxxus@2x.png"
                      accommodationType="Entire bungalow"
                      hotelName="Matterhorn Suites"
                      pricePerNight="$575/night"
                      rating="4.9"
                      reviewCount="(60 reviews)"
                    />
                    <HotelCardForm
                      unsplashtSn8bPOpVEo="/unsplashtsn8bpopveo@2x.png"
                      storyBeachfrontSuite="2-Story beachfront suite"
                      discoveryShores="Discovery Shores"
                      night="$360/night"
                      vector="/vector.svg"
                      prop="4.8"
                      reviews="(116 reviews)"
                    />
                    <HotelCardForm
                      unsplashtSn8bPOpVEo="/unsplashrlwe8f8anoc@2x.png"
                      storyBeachfrontSuite="Single deluxe hut"
                      discoveryShores="Arctic Hut "
                      night="$420/night"
                      vector="/vector1.svg"
                      prop="4.7"
                      reviews="(78 reviews)"
                      propPadding="var(--padding-0) var(--padding-0) var(--padding-0) 0.00000108736855963798px"
                      propBoxSizing="border-box"
                    />
                    <HotelCardContainer
                      propertyDimensions="/unsplashyqrybvxug5q@2x.png"
                      accommodationType="Deluxe King Room"
                      hotelName="Lake Louise Inn"
                      pricePerNight="$244/night"
                      rating="4.6"
                      reviewCount="(63 reviews)"
                      propBorder="0.7px solid #cdddec"
                    />
                  </div>
                  <div className={styles.viewAllStaysGroup}>
                    <div className={styles.viewAllStays1}>View all stays</div>
                    <img
                      className={styles.notificationBellIcon}
                      alt=""
                      src="/arrowright2.svg"
                    />
                  </div>
                </form>
              </div>
              <div className={styles.footerSection}>
                <div className={styles.shareYourTravelsFormWrapper}>
                  <div className={styles.shareYourTravelsForm}>
                    <div className={styles.formHeader}>
                      <b className={styles.upcomingFlight}>
                        subscribe to our newsletter
                      </b>
                      <b className={styles.formTitle}>Get weekly updates</b>
                    </div>
                    <div className={styles.form}>
                      <div className={styles.formText}>
                        <div className={styles.fillInYour}>
                          Fill in your details to join the party!
                        </div>
                      </div>
                      <div className={styles.formFields}>
                        <div className={styles.formText}>
                          <TextField
                            className={styles.input1}
                            color="primary"
                            label="Your name"
                            size="medium"
                            variant="outlined"
                            type="text"
                          />
                        </div>
                        <div className={styles.formText}>
                          <TextField
                            className={styles.input1}
                            color="primary"
                            label="Email address"
                            size="medium"
                            variant="outlined"
                            type="text"
                          />
                        </div>
                      </div>
                      <button className={styles.button1}>
                        <VariantContainedSizeLarge
                          buttonText="submit"
                          variantContainedSizeLargeBoxSizing="border-box"
                          buttonFontSize="11.21px"
                          buttonLineHeight="19.44px"
                          buttonColor="#fff"
                          buttonDisplay="inline-block"
                        />
                      </button>
                    </div>
                  </div>
                </div>
                <footer className={styles.footer}>
                  <div className={styles.fickleflightBio}>
                    <img
                      className={styles.fickleflightLogoIcon}
                      alt=""
                      src="/logo.svg"
                    />
                    <div className={styles.fickleFlightIs}>
                      Fickle Flight is your one-stop travel portal. We offer
                      hassle free flight and hotel bookings. We also have all
                      your flight needs in you online shop.
                    </div>
                    <img
                      className={styles.socialIcons}
                      alt=""
                      src="/social-icons.svg"
                    />
                  </div>
                  <div className={styles.footerChild} />
                  <div className={styles.footerLinks}>
                    <div className={styles.company}>
                      <div className={styles.frame2}>
                        <div className={styles.company1}>Company</div>
                        <a className={styles.aboutUs}>About Us</a>
                      </div>
                      <div className={styles.frame3}>
                        <div className={styles.news}>News</div>
                        <div className={styles.careers}>Careers</div>
                        <div className={styles.howWeWork}>How we work</div>
                      </div>
                    </div>
                    <div className={styles.support}>
                      <div className={styles.frame4}>
                        <div className={styles.support1}>Support</div>
                        <div className={styles.account}>Account</div>
                      </div>
                      <div className={styles.frame5}>
                        <div className={styles.howWeWork}>Support Center</div>
                        <div className={styles.faq}>FAQ</div>
                      </div>
                      <div className={styles.accessibility}>Accessibility</div>
                    </div>
                    <div className={styles.more}>
                      <div className={styles.frame6}>
                        <div className={styles.more1}>More</div>
                        <div className={styles.covidAdvisory}>
                          Covid Advisory
                        </div>
                      </div>
                      <div className={styles.frame3}>
                        <div className={styles.airlineFees}>Airline Fees</div>
                        <div className={styles.tips}>Tips</div>
                        <div className={styles.howWeWork}>Quarantine Rules</div>
                      </div>
                    </div>
                  </div>
                </footer>
              </div>
            </div>
          </div>
          <div className={styles.frame8}>
            <div className={styles.frame9}>
              <div className={styles.madeByTeam}>Made by Team Locofy</div>
            </div>
            <div className={styles.frame10}>
              <div className={styles.travelWebsite}>Travel Website</div>
              <img className={styles.frameIcon1} alt="" src="/frame1.svg" />
            </div>
          </div>
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default CoverFrame;
