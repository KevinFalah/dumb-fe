import Home from "./Home";
import Movie from './Movie'
import TvShows from "./TvShows";
import VideoDetail from "./VideoDetail";
import Profile from "./Profile";
import Payment from "./Payment";
import Notfound from "./Notfound";
import ListFilm from './ListFilm';
import Loading from '../components/Loading'
import IncomingTransaction from './IncomingTransaction'
import AddFilm from '../components/AddMovie/AddFilm'
import AddEpisode from '../components/AddEpisode/AddEpisode'
import PrivateRoute from "../components/PrivateRoute";
import PrivateRouteLogin from "../components/PrivateRouteLogin";
import NotAdmin from "./NotAdmin";
import NotLogin from "./NotLogin";

export {
    Home, 
    Movie, 
    VideoDetail, 
    Payment, 
    Profile, 
    Notfound, 
    TvShows, 
    ListFilm, 
    AddFilm, 
    AddEpisode,
    PrivateRoute,
    PrivateRouteLogin,
    NotAdmin,
    Loading,
    NotLogin,
    IncomingTransaction
}