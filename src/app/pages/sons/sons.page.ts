import {Howl, Howler} from 'howler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Track } from '../../interfaces/track';
import { IonRange } from '@ionic/angular';

@Component({
  selector: 'app-sons',
  templateUrl: './sons.page.html',
  styleUrls: ['./sons.page.scss'],
})
export class SonsPage implements OnInit {

  playlist: Track[]  = [
    {
      name: 'Aplausos' ,
      path: '../../../assets/mp3/APLAUSOS.mp3'
    },
    {
      name: 'Buzina',
      path: '../../../assets/mp3/BUZINA.mp3'
    },
    {
      name: 'Cachorro',
      path: '../../../assets/mp3/CACHORRO.mp3'
    },
    {
      name: 'Cavalo',
      path: '../../../assets/mp3/CAVALO.mp3'
    },
    {
      name: 'Chuva',
      path: '../../../assets/mp3/CHUVA.mp3'
    },
    {
      name: 'Despertador',
      path: '../../../assets/mp3/DESPERTADOR.mp3'
    },
    {
      name: 'Espirro',
      path: '../../../assets/mp3/ESPIRRO.mp3'
    },
    {
      name: 'Gato',
      path: '../../../assets/mp3/GATO.mp3'
    },
    {
      name: 'Grilo',
      path: '../../../assets/mp3/GRILO.mp3'
    },
    {
      name: 'Jumento',
      path: '../../../assets/mp3/JUMENTO.mp3'
    },
    {
      name: 'Lobo',
      path: '../../../assets/mp3/LOBO.mp3'
    },
    {
      name: 'Piano',
      path: '../../../assets/mp3/PIANO.mp3'
    },
    {
      name: 'Porco',
      path: '../../../assets/mp3/PORCO.mp3'
    },
    {
      name: 'Risada',
      path: '../../../assets/mp3/TREM.mp3'
    },
    {
      name: 'Serra elétrica',
      path: '../../../assets/mp3/SERRA ELETRICA.mp3'
    },
    {
      name: 'Trem',
      path: '../../../assets/mp3/TREM.mp3'
    },
    {
      name: 'Vaca',
      path: '../../../assets/mp3/VACA.mp3'
    },
  ];


  isPlaying = false;
  player: Howl;
  activeTrack: Track = null;
  progress = 0;

  @ViewChild('range', { static: false }) range: IonRange;
  constructor() { }

  ngOnInit() {
  }

  start(track: Track) {
    if (this.player) {
      this.player.stop();
    }
    this.player = new Howl({
      src: [track.path],
      html5: true,
      onplay: () => {
        this.activeTrack = track;
        this.isPlaying = true;
        this.updateProgress();
      },
      onend: () => {
        this.isPlaying = false;
      }
    });
    this.player.play();
  }


  updateProgress() {
    let seek: any = this.player.seek();
    this.progress = (seek / this.player.duration()) * 100 || 0;
    setTimeout(() => {
      this.updateProgress();
    }, 500);
  }

  togglePlayer(pause) {
    this.isPlaying = !pause;
    if (pause) {
      this.player.pause();
    } else {
      this.player.play();
    }
  }

  seek() {
    let newVal = +this.range.value;
    let duration = this.player.duration();
    this.player.seek(duration * (newVal / 100));
  }

  prev() {
    let index = this.playlist.indexOf(this.activeTrack);
    if (index > 0) {
      this.start(this.playlist[index - 1]);
    } else {
      this.start(this.playlist[this.playlist.length - 1]);
    }
  }

  next() {
    let index = this.playlist.indexOf(this.activeTrack);
    if (index != this.playlist.length - 1) {
      this.start(this.playlist[index + 1]);
    } else {
      this.start(this.playlist[0]);
    }
  }
}
