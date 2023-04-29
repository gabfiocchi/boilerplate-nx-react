import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Page.css';
import { RouteComponentProps } from 'react-router-dom';


interface PageProps
  extends RouteComponentProps<{
    name: string;
  }> { }


const Page: React.FC<PageProps> = ({ match }) => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{match.params.name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{match.params.name}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name={match.params.name} />
      </IonContent>
    </IonPage>
  );
};

export default Page;
