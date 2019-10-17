import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ChannelService } from 'src/app/shared/services/channel.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  channels: any[];
  form: FormGroup;

  constructor(private fb: FormBuilder, private channelService: ChannelService) { }

  ngOnInit() {
    this.getAllChannels();
    this.form = this.fb.group({
      name: ['', Validators.required],
      username: ['', Validators.required]
    });
  }

  getAllChannels() {
    this.channelService.getAll().then((result: any) => {
      this.channels = result.data;
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const data = this.form.value;
      data.user_id = 1;
      this.channelService.add(data).then(result => {
        Swal.fire({
          text: 'Canal criado com sucesso',
          type: 'success',
          confirmButtonText: 'Ok'
        });

        this.form.reset();
      });
    }
  }
}
