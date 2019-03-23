import { Component } from '@angular/core';
import{PopularPage} from '../popular/popular'
import{SciencePage} from '../science/science'
import{MoviePage} from '../movie/movie'
import{DetailPage} from '../detail/detail'
/*import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';*/

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  /*tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;*/
  tab1Root = PopularPage;
  tab2Root = SciencePage;
  tab3Root = MoviePage;

  constructor() {

  }
}
