import { Navbar } from "../Navbar";

export const CalenderAndContact = () => {
    return(
        <div>
            <Navbar />
            <h1>Calender and Contact Info</h1>
            <div style={{paddingLeft: "5%"}}>
                <iframe src="https://calendar.google.com/calendar/embed?src=spb1m8so2ceskt7jb4a863f95g%40group.calendar.google.com&ctz=America%2FNew_York&src=5has6lsonjrj3kc83acrn0kb0g%40group.calendar.google.com&ctz=America%2FNew_York&src=brennagirl13001%40gmail.com&ctz=America%2FNew_York&src=cf4sk7lgitprb5obc6dfe26o58%40group.calendar.google.com&ctz=America%2FNew_York&src=moth3rdahcr797b9qt7sv89h5s%40group.calendar.google.com&ctz=America%2FNew_York" title=" " width="800" height="600" frameborder="0" scrolling="no"></iframe>
            </div>
        </div>    
        );
}