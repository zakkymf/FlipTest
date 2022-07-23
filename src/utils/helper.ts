import {Colors} from '../theme/Colors';

export const statusTransaction = (status: string) => {
  switch (status) {
    case 'SUCCESS':
      return {
        label: 'Berhasil',
        color: Colors.green,
      };
      break;
    case 'PENDING':
      return {
        label: 'Pengecekan',
        color: Colors.orange,
      };
      break;
    case 'FAILED':
      return {
        label: 'Gagal',
        color: Colors.red,
      };
      break;
    default:
      break;
  }
};

export const formatCurrency = (
  nominal: any,
  currency = 'Rp',
  separator = '.',
) => {
  if (isNaN(nominal)) {
    nominal = '';
  }

  if (nominal || nominal === '' || nominal === 0) {
    return (
      currency + nominal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator)
    );
  }

  return '';
};

export function formatDate(date: string) {
  let bulan = '';
  const year = date.substring(0, 4);
  const month = date.substring(5, 7);
  const day = date.substring(8, 10);
  switch (month) {
    case '01':
      bulan = 'Januari';
      break;
    case '02':
      bulan = 'Februari';
      break;
    case '03':
      bulan = 'Maret';
      break;
    case '04':
      bulan = 'April';
      break;
    case '05':
      bulan = 'Mei';
      break;
    case '06':
      bulan = 'Juni';
      break;
    case '07':
      bulan = 'Juli';
      break;
    case '08':
      bulan = 'Agustus';
      break;
    case '09':
      bulan = 'September';
      break;
    case '10':
      bulan = 'Oktober';
      break;
    case '11':
      bulan = 'November';
      break;
    case '12':
      bulan = 'Desember';
      break;
  }

  return `${day} ${bulan} ${year}`;
}

export const parseDateTime = (date: any) => {
  var newDate = date.split(/\D/);
  return new Date(
    newDate[0],
    newDate[1] - 1,
    newDate[2],
    newDate[3],
    newDate[4],
    newDate[5],
  );
};
