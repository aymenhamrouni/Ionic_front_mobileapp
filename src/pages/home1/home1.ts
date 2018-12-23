import { Component, ViewChild, ElementRef } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import Highcharts from "highcharts";
import More from "highcharts/highcharts-more";
import { StreamingMedia, StreamingVideoOptions, StreamingAudioOptions } from '@ionic-native/streaming-media';

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
export class Home1Page {
/* 
  constructor(private streamingMedia: StreamingMedia) {    let options: StreamingVideoOptions = {
    successCallback: () => { console.log('Finished Video') },
    errorCallback: (e) => { console.log('Error: ', e) },
    orientation: 'portrait' ,
    controls :  false 
  };

  this.streamingMedia.playVideo('https://r5---sn-uv2oxuuo-u0os.googlevideo.com/videoplayback?mime=video%2Fmp4&initcwndbps=281250&c=MWEB&clen=3473516&itag=18&gir=yes&mt=1545569968&pl=17&ei=N4cfXJ3QBpmIVNOVifAF&lmt=1541119826100268&key=yt6&ip=102.158.76.224&mv=m&source=youtube&ms=au%2Crdu&fvip=5&mn=sn-uv2oxuuo-u0os%2Csn-hgn7yn7l&mm=31%2C29&dur=188.429&id=o-ALljSgkPYwhsVY-vRdtJbxhWo8N3RySdCeaGlY3NYIhG&expire=1545591703&requiressl=yes&txp=5531432&ratebypass=yes&sparams=clen%2Cdur%2Cei%2Cgir%2Cid%2Cinitcwndbps%2Cip%2Cipbits%2Citag%2Clmt%2Cmime%2Cmm%2Cmn%2Cms%2Cmv%2Cpl%2Cratebypass%2Crequiressl%2Csource%2Cexpire&ipbits=0&signature=80FD18DF3425E4FE9C25B4EF72A2CD9130E78348.A6B631F88BA8DBFD68154A7F00504D3BCC75CB2E&cpn=vMPn-DRuFdnFtgEL', options);
 } */
 

 
}
 