import {homeMarkup,dialogMarkup} from '../lib/markup';
import ServiceInteractions from '../components/ServiceInteractions';
export default function Home(){return <><main dangerouslySetInnerHTML={{__html:homeMarkup}}/><div dangerouslySetInnerHTML={{__html:dialogMarkup}}/><ServiceInteractions/></>}
