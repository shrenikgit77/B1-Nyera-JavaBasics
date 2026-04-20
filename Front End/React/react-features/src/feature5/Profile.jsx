import "./stylesheet.css";
import CustomCSS from "./MyStyles";

let UserProfile = () => {
    return (
        <>
            <div style={CustomCSS.card}>
                <h1 style={CustomCSS.title}>Smith Devid</h1>
                <div style={CustomCSS.cardBody}>
                    <div className="img-center">
                        <img src="https://placehold.co/400x400/orange/white?text=image" style={CustomCSS.profilePic} />
                    </div>
                </div>
            </div>        
        </>
    )
}

export default UserProfile;