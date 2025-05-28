import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'VALIDADOR DE CARTÃO DE CRÉDITO';

   cardNumber: string = '';
   showBrand = false;

  getCardBrand(cardNumber: string): string {
    // Lista abrangente de bandeiras de cartões (principais globais e regionais conhecidas)
    const brands = [
      { name: 'Visa', pattern: /^4[0-9]{12}(?:[0-9]{3})?$/ },
      { name: 'MasterCard', pattern: /^(5[1-5][0-9]{14}|2(2[2-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[01][0-9]{13}|720[0-9]{12}))$/ },
      { name: 'American Express', pattern: /^3[47][0-9]{13}$/ },
      { name: 'Diners Club', pattern: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/ },
      { name: 'Discover', pattern: /^6(?:011|5[0-9]{2})[0-9]{12}$/ },
      { name: 'JCB', pattern: /^(?:2131|1800|35\d{3})\d{11}$/ },
      { name: 'Maestro', pattern: /^(5018|5020|5038|6304|6759|6761|6763)[0-9]{8,15}$/ },
      { name: 'Elo', pattern: /^(4011(78|79)|431274|438935|451416|457393|504175|5067(0[0-9]|1[0-9]|20)|5090(4[0-9]|5[0-9]|6[0-9])|627780|636297|636368|6500(3[1-3]|4[1-3]|5[1-3])|6504(8[1-3]|9[1-3])|6505(1[1-3]|2[1-3])|6507(0[1-3]|1[1-3])|6509(2[1-3]|3[1-3])|6516(5[1-3]|6[1-3])|6550(0[1-3]|1[1-3]))[0-9]{10,12}$/ },
      { name: 'Hipercard', pattern: /^(606282\d{10}(\d{3})?)|(3841\d{15})$/ },
      { name: 'UnionPay', pattern: /^62[0-9]{14,17}$/ },
      { name: 'Mir', pattern: /^220[0-4][0-9]{12}$/ },
      // African card brands
      { name: 'Verve', pattern: /^(506(0|1)|507(8|9)|6500|6501|6502|6503|6504|6505|6506|6507|6508|6509|6510|6511|6512|6513|6514|6515|6516|6517|6518|6519|6520|6521|6522|6523|6524|6525|6526|6527|6528|6529|6530|6531|6532|6533|6534|6535|6536|6537|6538|6539|6540|6541|6542|6543|6544|6545|6546|6547|6548|6549|6550|6551|6552|6553|6554|6555|6556|6557|6558|6559)[0-9]{12,15}$/ },
      { name: 'UBA Africard', pattern: /^507865[0-9]{10,13}$/ },
      { name: 'Ecobank', pattern: /^506099[0-9]{10,13}$/ },
      { name: 'Zenith', pattern: /^5061[0-9]{12,15}$/ },
      // Outras bandeiras regionais e menos comuns
      { name: 'Aura', pattern: /^50[0-9]{14,17}$/ },
      { name: 'Cabal', pattern: /^6042[0-9]{12}$/ },
      { name: 'Naranja', pattern: /^589562[0-9]{10}$/ },
      { name: 'Tarjeta Shopping', pattern: /^603488[0-9]{10}$/ },
      { name: 'Carte Bancaire', pattern: /^4[0-9]{12}(?:[0-9]{3})?$/ }, // França, geralmente Visa
      { name: 'Dankort', pattern: /^5019[0-9]{12}$/ }, // Dinamarca
      { name: 'BC Card', pattern: /^9[0-9]{15}$/ }, // Coreia do Sul
      { name: 'Troy', pattern: /^9792[0-9]{12}$/ }, // Turquia
      { name: 'RuPay', pattern: /^6(508|088|175|389|397|457|508|606|607|608|652|653|654|655)[0-9]{10,12}$/ }, // Índia
      { name: 'UzCard', pattern: /^8600[0-9]{12}$/ }, // Uzbequistão
      { name: 'Humo', pattern: /^9860[0-9]{12}$/ }, // Uzbequistão
      { name: 'Tinkoff', pattern: /^2200[0-9]{12}$/ }, // Rússia (Mir já cobre)
      // Adicione outras bandeiras conforme necessário
    ];

    const sanitized = cardNumber.replace(/\D/g, '');
    for (const brand of brands) {
      if (brand.pattern.test(sanitized)) {
        return brand.name;
      }
    }
    return 'Desconhecido';
  }

  openModal() {
  this.showBrand = true;
}
}
