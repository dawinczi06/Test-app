import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormService } from '../form.service';
import { Router } from '@angular/router';
import { IUser } from '../user.interface';
import { Subscription } from 'rxjs';

interface Nationality {
  country: string;
  value: string;
}

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
})
export class EditProfileComponent implements OnInit, OnDestroy {
  @ViewChild('f', { static: false }) signupForm: NgForm;
  subscription: Subscription;
  newUserData: IUser;
  selectedOption: string;
  saved: boolean;
  isValid: boolean = true;

  nationalities: Nationality[] = [
    { country: 'Afghanistan', value: 'AF' },
    { country: 'Åland Islands', value: 'AX' },
    { country: 'Albania', value: 'AL' },
    { country: 'Algeria', value: 'DZ' },
    { country: 'American Samoa', value: 'AS' },
    { country: 'AndorrA', value: 'AD' },
    { country: 'Angola', value: 'AO' },
    { country: 'Anguilla', value: 'AI' },
    { country: 'Antarctica', value: 'AQ' },
    { country: 'Antigua and Barbuda', value: 'AG' },
    { country: 'Argentina', value: 'AR' },
    { country: 'Armenia', value: 'AM' },
    { country: 'Aruba', value: 'AW' },
    { country: 'Australia', value: 'AU' },
    { country: 'Austria', value: 'AT' },
    { country: 'Azerbaijan', value: 'AZ' },
    { country: 'Bahamas', value: 'BS' },
    { country: 'Bahrain', value: 'BH' },
    { country: 'Bangladesh', value: 'BD' },
    { country: 'Barbados', value: 'BB' },
    { country: 'Belarus', value: 'BY' },
    { country: 'Belgium', value: 'BE' },
    { country: 'Belize', value: 'BZ' },
    { country: 'Benin', value: 'BJ' },
    { country: 'Bermuda', value: 'BM' },
    { country: 'Bhutan', value: 'BT' },
    { country: 'Bolivia', value: 'BO' },
    { country: 'Bosnia and Herzegovina', value: 'BA' },
    { country: 'Botswana', value: 'BW' },
    { country: 'Bouvet Island', value: 'BV' },
    { country: 'Brazil', value: 'BR' },
    { country: 'British Indian Ocean Territory', value: 'IO' },
    { country: 'Brunei Darussalam', value: 'BN' },
    { country: 'Bulgaria', value: 'BG' },
    { country: 'Burkina Faso', value: 'BF' },
    { country: 'Burundi', value: 'BI' },
    { country: 'Cambodia', value: 'KH' },
    { country: 'Cameroon', value: 'CM' },
    { country: 'Canada', value: 'CA' },
    { country: 'Cape Verde', value: 'CV' },
    { country: 'Cayman Islands', value: 'KY' },
    { country: 'Central African Republic', value: 'CF' },
    { country: 'Chad', value: 'TD' },
    { country: 'Chile', value: 'CL' },
    { country: 'China', value: 'CN' },
    { country: 'Christmas Island', value: 'CX' },
    { country: 'Cocos (Keeling) Islands', value: 'CC' },
    { country: 'Colombia', value: 'CO' },
    { country: 'Comoros', value: 'KM' },
    { country: 'Congo', value: 'CG' },
    { country: 'Congo, The Democratic Republic of the', value: 'CD' },
    { country: 'Cook Islands', value: 'CK' },
    { country: 'Costa Rica', value: 'CR' },
    { country: 'Cote D\'Ivoire', value: 'CI' },
    { country: 'Croatia', value: 'HR' },
    { country: 'Cuba', value: 'CU' },
    { country: 'Cyprus', value: 'CY' },
    { country: 'Czech Republic', value: 'CZ' },
    { country: 'Denmark', value: 'DK' },
    { country: 'Djibouti', value: 'DJ' },
    { country: 'Dominica', value: 'DM' },
    { country: 'Dominican Republic', value: 'DO' },
    { country: 'Ecuador', value: 'EC' },
    { country: 'Egypt', value: 'EG' },
    { country: 'El Salvador', value: 'SV' },
    { country: 'Equatorial Guinea', value: 'GQ' },
    { country: 'Eritrea', value: 'ER' },
    { country: 'Estonia', value: 'EE' },
    { country: 'Ethiopia', value: 'ET' },
    { country: 'Falkland Islands (Malvinas)', value: 'FK' },
    { country: 'Faroe Islands', value: 'FO' },
    { country: 'Fiji', value: 'FJ' },
    { country: 'Finland', value: 'FI' },
    { country: 'France', value: 'FR' },
    { country: 'French Guiana', value: 'GF' },
    { country: 'French Polynesia', value: 'PF' },
    { country: 'French Southern Territories', value: 'TF' },
    { country: 'Gabon', value: 'GA' },
    { country: 'Gambia', value: 'GM' },
    { country: 'Georgia', value: 'GE' },
    { country: 'Germany', value: 'DE' },
    { country: 'Ghana', value: 'GH' },
    { country: 'Gibraltar', value: 'GI' },
    { country: 'Greece', value: 'GR' },
    { country: 'Greenland', value: 'GL' },
    { country: 'Grenada', value: 'GD' },
    { country: 'Guadeloupe', value: 'GP' },
    { country: 'Guam', value: 'GU' },
    { country: 'Guatemala', value: 'GT' },
    { country: 'Guernsey', value: 'GG' },
    { country: 'Guinea', value: 'GN' },
    { country: 'Guinea-Bissau', value: 'GW' },
    { country: 'Guyana', value: 'GY' },
    { country: 'Haiti', value: 'HT' },
    { country: 'Heard Island and Mcdonald Islands', value: 'HM' },
    { country: 'Holy See (Vatican City State)', value: 'VA' },
    { country: 'Honduras', value: 'HN' },
    { country: 'Hong Kong', value: 'HK' },
    { country: 'Hungary', value: 'HU' },
    { country: 'Iceland', value: 'IS' },
    { country: 'India', value: 'IN' },
    { country: 'Indonesia', value: 'ID' },
    { country: 'Iran, Islamic Republic Of', value: 'IR' },
    { country: 'Iraq', value: 'IQ' },
    { country: 'Ireland', value: 'IE' },
    { country: 'Isle of Man', value: 'IM' },
    { country: 'Israel', value: 'IL' },
    { country: 'Italy', value: 'IT' },
    { country: 'Jamaica', value: 'JM' },
    { country: 'Japan', value: 'JP' },
    { country: 'Jersey', value: 'JE' },
    { country: 'Jordan', value: 'JO' },
    { country: 'Kazakhstan', value: 'KZ' },
    { country: 'Kenya', value: 'KE' },
    { country: 'Kiribati', value: 'KI' },
    { country: 'Korea, Democratic People\'S Republic of', value: 'KP' },
    { country: 'Korea, Republic of', value: 'KR' },
    { country: 'Kuwait', value: 'KW' },
    { country: 'Kyrgyzstan', value: 'KG' },
    { country: 'Lao People\'S Democratic Republic', value: 'LA' },
    { country: 'Latvia', value: 'LV' },
    { country: 'Lebanon', value: 'LB' },
    { country: 'Lesotho', value: 'LS' },
    { country: 'Liberia', value: 'LR' },
    { country: 'Libyan Arab Jamahiriya', value: 'LY' },
    { country: 'Liechtenstein', value: 'LI' },
    { country: 'Lithuania', value: 'LT' },
    { country: 'Luxembourg', value: 'LU' },
    { country: 'Macao', value: 'MO' },
    { country: 'Macedonia, The Former Yugoslav Republic of', value: 'MK' },
    { country: 'Madagascar', value: 'MG' },
    { country: 'Malawi', value: 'MW' },
    { country: 'Malaysia', value: 'MY' },
    { country: 'Maldives', value: 'MV' },
    { country: 'Mali', value: 'ML' },
    { country: 'Malta', value: 'MT' },
    { country: 'Marshall Islands', value: 'MH' },
    { country: 'Martinique', value: 'MQ' },
    { country: 'Mauritania', value: 'MR' },
    { country: 'Mauritius', value: 'MU' },
    { country: 'Mayotte', value: 'YT' },
    { country: 'Mexico', value: 'MX' },
    { country: 'Micronesia, Federated States of', value: 'FM' },
    { country: 'Moldova, Republic of', value: 'MD' },
    { country: 'Monaco', value: 'MC' },
    { country: 'Mongolia', value: 'MN' },
    { country: 'Montserrat', value: 'MS' },
    { country: 'Morocco', value: 'MA' },
    { country: 'Mozambique', value: 'MZ' },
    { country: 'Myanmar', value: 'MM' },
    { country: 'Namibia', value: 'NA' },
    { country: 'Nauru', value: 'NR' },
    { country: 'Nepal', value: 'NP' },
    { country: 'Netherlands', value: 'NL' },
    { country: 'Netherlands Antilles', value: 'AN' },
    { country: 'New Caledonia', value: 'NC' },
    { country: 'New Zealand', value: 'NZ' },
    { country: 'Nicaragua', value: 'NI' },
    { country: 'Niger', value: 'NE' },
    { country: 'Nigeria', value: 'NG' },
    { country: 'Niue', value: 'NU' },
    { country: 'Norfolk Island', value: 'NF' },
    { country: 'Northern Mariana Islands', value: 'MP' },
    { country: 'Norway', value: 'NO' },
    { country: 'Oman', value: 'OM' },
    { country: 'Pakistan', value: 'PK' },
    { country: 'Palau', value: 'PW' },
    { country: 'Palestinian Territory, Occupied', value: 'PS' },
    { country: 'Panama', value: 'PA' },
    { country: 'Papua New Guinea', value: 'PG' },
    { country: 'Paraguay', value: 'PY' },
    { country: 'Peru', value: 'PE' },
    { country: 'Philippines', value: 'PH' },
    { country: 'Pitcairn', value: 'PN' },
    { country: 'Poland', value: 'PL' },
    { country: 'Portugal', value: 'PT' },
    { country: 'Puerto Rico', value: 'PR' },
    { country: 'Qatar', value: 'QA' },
    { country: 'Reunion', value: 'RE' },
    { country: 'Romania', value: 'RO' },
    { country: 'Russian Federation', value: 'RU' },
    { country: 'RWANDA', value: 'RW' },
    { country: 'Saint Helena', value: 'SH' },
    { country: 'Saint Kitts and Nevis', value: 'KN' },
    { country: 'Saint Lucia', value: 'LC' },
    { country: 'Saint Pierre and Miquelon', value: 'PM' },
    { country: 'Saint Vincent and the Grenadines', value: 'VC' },
    { country: 'Samoa', value: 'WS' },
    { country: 'San Marino', value: 'SM' },
    { country: 'Sao Tome and Principe', value: 'ST' },
    { country: 'Saudi Arabia', value: 'SA' },
    { country: 'Senegal', value: 'SN' },
    { country: 'Serbia and Montenegro', value: 'CS' },
    { country: 'Seychelles', value: 'SC' },
    { country: 'Sierra Leone', value: 'SL' },
    { country: 'Singapore', value: 'SG' },
    { country: 'Slovakia', value: 'SK' },
    { country: 'Slovenia', value: 'SI' },
    { country: 'Solomon Islands', value: 'SB' },
    { country: 'Somalia', value: 'SO' },
    { country: 'South Africa', value: 'ZA' },
    { country: 'South Georgia and the South Sandwich Islands', value: 'GS' },
    { country: 'Spain', value: 'ES' },
    { country: 'Sri Lanka', value: 'LK' },
    { country: 'Sudan', value: 'SD' },
    { country: 'Suriname', value: 'SR' },
    { country: 'Svalbard and Jan Mayen', value: 'SJ' },
    { country: 'Swaziland', value: 'SZ' },
    { country: 'Sweden', value: 'SE' },
    { country: 'Switzerland', value: 'CH' },
    { country: 'Syrian Arab Republic', value: 'SY' },
    { country: 'Taiwan, Province of China', value: 'TW' },
    { country: 'Tajikistan', value: 'TJ' },
    { country: 'Tanzania, United Republic of', value: 'TZ' },
    { country: 'Thailand', value: 'TH' },
    { country: 'Timor-Leste', value: 'TL' },
    { country: 'Togo', value: 'TG' },
    { country: 'Tokelau', value: 'TK' },
    { country: 'Tonga', value: 'TO' },
    { country: 'Trinidad and Tobago', value: 'TT' },
    { country: 'Tunisia', value: 'TN' },
    { country: 'Turkey', value: 'TR' },
    { country: 'Turkmenistan', value: 'TM' },
    { country: 'Turks and Caicos Islands', value: 'TC' },
    { country: 'Tuvalu', value: 'TV' },
    { country: 'Uganda', value: 'UG' },
    { country: 'Ukraine', value: 'UA' },
    { country: 'United Arab Emirates', value: 'AE' },
    { country: 'United Kingdom', value: 'GB' },
    { country: 'United States', value: 'US' },
    { country: 'United States Minor Outlying Islands', value: 'UM' },
    { country: 'Uruguay', value: 'UY' },
    { country: 'Uzbekistan', value: 'UZ' },
    { country: 'Vanuatu', value: 'VU' },
    { country: 'Venezuela', value: 'VE' },
    { country: 'Viet Nam', value: 'VN' },
    { country: 'Virgin Islands, British', value: 'VG' },
    { country: 'Virgin Islands, U.S.', value: 'VI' },
    { country: 'Wallis and Futuna', value: 'WF' },
    { country: 'Western Sahara', value: 'EH' },
    { country: 'Yemen', value: 'YE' },
    { country: 'Zambia', value: 'ZM' },
    { country: 'Zimbabwe', value: 'ZW' }
  ];

  constructor(private formService: FormService, private router: Router) {
  }

  ngOnInit(): void {
    this.saved = false;
    this.newUserData = this.formService.formUserData;
    this.selectedOption = this.formService.formUserData.nationality;
    console.log(this.signupForm);
  }

  onSave() {
    if (this.signupForm.valid) {
      this.newUserData.nationality = this.selectedOption;
      this.newUserData.firstName = this.signupForm.value.firstname;
      this.newUserData.lastName = this.signupForm.value.lastname;
      this.newUserData.age = this.signupForm.value.age;
      this.newUserData.nationality = this.selectedOption;
      this.newUserData.languages = this.signupForm.value.language;
      this.newUserData.height = this.signupForm.value.height;
      this.newUserData.phone = this.signupForm.value.phone;
      this.newUserData.email = this.signupForm.value.email;
      this.newUserData.proffesion = this.signupForm.value.proffesion;
      this.subscription = this.formService.currentData$.subscribe(newUserData => this.newUserData = newUserData);
      this.formService.getNewData(this.newUserData);
      this.saved = true;
      setTimeout(() => this.router.navigate(['/home']), 1000);
    }
    else {
      this.isValid = false;

    }
  }

  onKeyUpEvent() {
    if (this.signupForm.valid) {
      this.isValid = true;
    }
    else {
      this.isValid = false;
    }
  }

  onBack() {
    this.router.navigate(['/home']);
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
