import UpperPartOfThePage from "../components/profile-page-components/UpperPartOfThePage";
import EventListMainPage from "../components/EventListMainPage";
import "../components/design-files-css/profile-page-css/ProfilePage.css";
import NavBar from "../components/entry-page/Navbar";

function EventManagersProfilePage() {
	const username = "John Doe";

	return (
		<div className="main-page">
			<NavBar />
			<UpperPartOfThePage showEditButton={false} />
			<div className="bottom-part">
				<div className="events-title">
					<p className="title">{`${username}'s Events`}</p>
				</div>
				<div className="tab-content">
					<EventListMainPage />
				</div>
			</div>
		</div>
	);
}

export default EventManagersProfilePage;
