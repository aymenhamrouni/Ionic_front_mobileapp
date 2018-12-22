import { Component, ViewChild, ElementRef } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import Highcharts from "highcharts";
import More from "highcharts/highcharts-more";

More(Highcharts);
/**
 * Generated class for the Home1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-home1",
  templateUrl: "home1.html"
})
export class Home1Page {}
