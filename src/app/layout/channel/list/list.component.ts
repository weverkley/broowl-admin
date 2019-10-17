import { Component, OnInit } from '@angular/core';
import { ChannelService } from 'src/app/shared/services/channel.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  channels: any[];

  constructor(private channelService: ChannelService) { }

  ngOnInit() {
    this.getAllChannels();
  }

  getAllChannels() {
    this.channelService.getAll().then((result: any) => {
      this.channels = result.data;
    });
  }

  confirmDelete(item) {
    Swal.fire({
      title: 'Tem certeza?',
      text: "Você não poderá reverter esta situação!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, deletar!',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Deletado!',
          'Sua ação foi realizada com sucesso.',
          'success'
        )
      }
    })
  }
}
