import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Platform } from '@ionic/angular';

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

import { FileOpener } from '@ionic-native/file-opener/ngx';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Filesystem, Directory, Encoding, FilesystemDirectory } from '@capacitor/filesystem';
import { minusculoValidators } from './minusculo.validators';

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.page.html',
  styleUrls: ['./contracts.page.scss'],
})
export class ContractsPage implements OnInit {
  contractForm: FormGroup;
  pdfObj: any = null;
  base64Image: any = null;
  photoPreview: any = null;
  logoData: any = null;

  constructor(
    private fb: FormBuilder,
    private plt: Platform,
    private http: HttpClient,
    private fileOpener: FileOpener
  ) {}

  ngOnInit() {
    this.createDir();
    this.contractForm = this.fb.group({
      empresa: ["Shirleise Miguel Barros", [Validators.required]],
      meu_cpf: ["056.324.644-82", [Validators.required]],
      fantasia: ["Palhaça Pipocka Festas & Eventos", [Validators.required]],
      cnpj: ["27.887.533/0001-93", [Validators.required]],
      meu_endereco: ["Rua Xavier de brito, 574 – Prado/ Maceió – AL", [Validators.required]],
      tel_comercial: ["(82) 98746-9622", [Validators.required]],
      mail: ["palhacapipocka.maceio@gmail.com", [Validators.required]],
      instagram: ["@palhaca.pipocka_oficial", [Validators.required]],
      showLogo: false,
      CPF: ["", [Validators.required,  Validators.minLength(5), Validators.maxLength(11)]],
      name: ["", [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      nameKids: ["", [Validators.required]],
      age: ["", [Validators.required]],
      numbers: ["", [Validators.required]],
      email: ["", [minusculoValidators]],
      dateTime: ["", [Validators.required]],
      time: [""],
      theme: [""],
      localization: ["", [Validators.required]],
      address_fest: ["", [Validators.required]],
      district: [""],
      reference_point: [""],
      obs: [""],
      servico_contratado: ["", [Validators.required]],
      valor: ["", [Validators.required]],
      // text: 'A brincadeira da pipocka ja vai começar',
    });


    this.loadLocalAssetToBase64();
  }

  //carregar um arquivo local para base64
  loadLocalAssetToBase64() {
    this.http
      .get('assets/mario.jpg', { responseType: 'blob' })
      .subscribe((res) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          this.logoData = reader.result;
        };
        reader.readAsDataURL(res);
      });
  }

  async takePicture() {
    const image = await Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.Base64,
      source: CameraSource.Camera,
    });
    this.photoPreview = `data:image/jpeg;base64,${image.base64String}`;
  }

  createPdf() {
    // console.log(this.contractForm);
    const formvalue = this.contractForm.value;
    console.log(formvalue, 'formValue');
    const image = this.photoPreview
      ? { image: this.photoPreview, width: 300, alignment: 'center' }
      : {};

    let logo = {};
    if (formvalue.showLogo) {
      logo = { image: this.logoData, width: 50 };
    }

    const docDefinition = {
      watermark: {
        text: 'Palhaça pipocka',
        color: 'dark',
        opacity: 0.3,
        bold: true,
      },
      content: [
        {
          columns: [
            logo,
            {
              text:
                new Date().getDate() +
                '/' +
                (new Date().getMonth() + 1) +
                '/' +
                new Date().getFullYear(),
              alignment: 'right',
            },
          ],
        },
        { text: 'Contrato de prestação de serviço', style: 'header' },

        {
          columns: [
            {
              width: '50%',
              text: 'Nome empresarial',
              style: 'subheader',
            },
          ],
        },
        {
          columns: [
            {
              width: '50%',
              text: formvalue.empresa,
            },
          ]
        },


        {
          columns: [
            {
              width: '50%',
              text: 'CPF',
              style: 'subheader',
            },
          ],
        },
        {
          columns: [
            {
              width: '50%',
              text: formvalue.meu_cpf,
            },
          ]
        },


        {
          columns: [
            {
              width: '50%',
              text: 'Nome fantasia',
              style: 'subheader',
            },
          ],
        },
        {
          columns: [
            {
              width: '50%',
              text: formvalue.fantasia,
            },
          ]
        },

        {
          columns: [
            {
              width: '50%',
              text: 'CNPJ',
              style: 'subheader',
            },
          ],
        },
        {
          columns: [
            {
              width: '50%',
              text: formvalue.cpnj,
            },
          ]
        },

        {
          columns: [
            {
              width: '50%',
              text: 'Endereço',
              style: 'subheader',
            },
          ],
        },
        {
          columns: [
            {
              width: '50%',
              text: formvalue.meu_endereco,
            },
          ]
        },

        {
          columns: [
            {
              width: '50%',
              text: 'Telefone Comercial',
              style: 'subheader',
            },
          ],
        },
        {
          columns: [
            {
              width: '50%',
              text: formvalue.tel_comercial,
            },
          ]
        },

        {
          columns: [
            {
              width: '50%',
              text: 'E-mail',
              style: 'subheader',
            },
          ],
        },
        {
          columns: [
            {
              width: '50%',
              text: formvalue.mail,
            },
          ]
        },

        {
          columns: [
            {
              width: '50%',
              text: 'Instagram',
              style: 'subheader',
            },
          ],
        },
        {
          columns: [
            {
              width: '50%',
              text: formvalue.instagram,
            },
          ]
        },

        { text: 'Dados do cliente', style: 'header' },
        // aqui
        {
          columns: [
            {
              width: '50%',
              text: 'Nome completo',
              style: 'subheader',
            },
          ],
        },
        {
          columns: [
            {
              width: '50%',
              text: formvalue.name,
            },
          ]
        },
        {
          columns: [
            {
              width: '50%',
              text: 'CPF',
              style: 'subheader',
            },
          ],
        },
        {
          columns: [
            {
              width: '50%',
              text: formvalue.CPF,
            },
          ]
        },
        {
          columns: [
            {
              width: '50%',
              text: 'Nome da criança',
              style: 'subheader',
            },
          ],
        },
        {
          columns: [
            {
              width: '50%',
              text: formvalue.nameKids,
            },
          ]
        },
        {
          columns: [
            {
              width: '25%',
              text: 'idade',
              style: 'subheader',
            },
          ],
        },
        {
          columns: [
            {
              width: '25%',
              text: formvalue.age,
            },
          ]
        },
        {
          columns: [
            {
              width: '50%',
              text: 'E-mail',
              style: 'subheader',
            },
          ],
        },
        {
          columns: [
            {
              width: '50%',
              text: formvalue.email,
            },
          ]
        },
        {
          columns: [
            {
              width: '50%',
              text: 'Data e hora',
              style: 'subheader',
            },
          ],
        },
        {
          columns: [
            {
              width: '50%',
              text: formvalue.dateTime,
            },
          ]
        },

        {
          columns: [
            {
              width: '50%',
              text: 'Tema',
              style: 'subheader',
            },
          ],
        },
        {
          columns: [
            {
              width: '50%',
              text: formvalue.theme,
            },
          ]
        },
        {
          columns: [
            {
              width: '50%',
              text: 'Local',
              style: 'subheader',
            },
          ],
        },
        {
          columns: [
            {
              width: '50%',
              text: formvalue.localization,
            },
          ]
        },
        {
          columns: [
            {
              width: '50%',
              text: 'Endereço',
              style: 'subheader',
            },
          ],
        },
        {
          columns: [
            {
              width: '50%',
              text: formvalue.address_fest,
            },
          ]
        },
        {
          columns: [
            {
              width: '50%',
              text: 'Bairro',
              style: 'subheader',
            },
          ],
        },
        {
          columns: [
            {
              width: '50%',
              text: formvalue.district,
            },
          ]
        },
        {
          columns: [
            {
              width: '50%',
              text: 'Ponto de referência',
              style: 'subheader',
            },
          ],
        },
        {
          columns: [
            {
              width: '50%',
              text: formvalue.reference_point,
            },
          ]
        },
        {
          columns: [
            {
              width: '50%',
              text: 'Observação',
              style: 'subheader',
            },
          ],
        },
        {
          columns: [
            {
              width: '50%',
              text: formvalue.obs,
            },
          ]
        },
        image, // The potentially captured image!
        // { text: formvalue.text, margin: [0, 20, 0, 20] },
        { text: 'Serviço contratado', style: 'header', margin: [0, 250,0] },
        {
          columns: [
            {
              width: '50%',
              text: 'Serviço contratado',
              style: 'subheader',
            },
          ],
        },
        {
          columns: [
            {
              width: '50%',
              text: formvalue.servico_contratado,
            },
          ]
        },
        {
          columns: [
            {
              width: '50%',
              text: 'Valor',
              style: 'subheader',
            },
          ],
        },
        {
          columns: [
            {
              width: '50%',
              text: formvalue.valor,
            },
          ]
        },


      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          margin: [0, 15, 0, 0],
        },
        subheader: {
          fontSize: 14,
          bold: true,
          margin: [0, 15, 0, 0],
        },
      },
    };
    this.pdfObj = pdfMake.createPdf(docDefinition);
    console.log('pdf criado');
  }

  downloadPdf() {
    if (this.plt.is('cordova')) {
      this.pdfObj.getBase64(async (data) => {
        try {
          let path = `pdf/contratoPipocka_${Date.now()}.pdf`;

          const result = await Filesystem.writeFile({
            path,
            data: data,
            directory: Directory.Documents,
            recursive: true,
            // encoding: Encoding.UTF8
          });
          this.fileOpener.open(`${result.uri}`, 'application/pdf');
        } catch (e) {
          console.error('Unable to write file', e);
        }
      });
    } else {
      // On a browser simply use download!
      this.pdfObj.download();
    }
  }

  async createDir(){
    try {
      let ret = await Filesystem.mkdir({
        path: 'pipockaContracts',
        directory: Directory.Documents,
        recursive: true
      });
      console.log('folder ', ret);
    } catch(e) {

    }
  }

}
