import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-kurs2-вид-док-l');
  this.route('i-i-s-kurs2-вид-док-e',
  { path: 'i-i-s-kurs2-вид-док-e/:id' });
  this.route('i-i-s-kurs2-вид-док-e.new',
  { path: 'i-i-s-kurs2-вид-док-e/new' });
  this.route('i-i-s-kurs2-выгр-файла-l');
  this.route('i-i-s-kurs2-выгр-файла-e',
  { path: 'i-i-s-kurs2-выгр-файла-e/:id' });
  this.route('i-i-s-kurs2-выгр-файла-e.new',
  { path: 'i-i-s-kurs2-выгр-файла-e/new' });
  this.route('i-i-s-kurs2-еди-изм-l');
  this.route('i-i-s-kurs2-еди-изм-e',
  { path: 'i-i-s-kurs2-еди-изм-e/:id' });
  this.route('i-i-s-kurs2-еди-изм-e.new',
  { path: 'i-i-s-kurs2-еди-изм-e/new' });
  this.route('i-i-s-kurs2-загр-файла-l');
  this.route('i-i-s-kurs2-загр-файла-e',
  { path: 'i-i-s-kurs2-загр-файла-e/:id' });
  this.route('i-i-s-kurs2-загр-файла-e.new',
  { path: 'i-i-s-kurs2-загр-файла-e/new' });
  this.route('i-i-s-kurs2-конвер-файлы-l');
  this.route('i-i-s-kurs2-конвер-файлы-e',
  { path: 'i-i-s-kurs2-конвер-файлы-e/:id' });
  this.route('i-i-s-kurs2-конвер-файлы-e.new',
  { path: 'i-i-s-kurs2-конвер-файлы-e/new' });
  this.route('i-i-s-kurs2-конверт-l');
  this.route('i-i-s-kurs2-конверт-e',
  { path: 'i-i-s-kurs2-конверт-e/:id' });
  this.route('i-i-s-kurs2-конверт-e.new',
  { path: 'i-i-s-kurs2-конверт-e/new' });
  this.route('i-i-s-kurs2-расширение-l');
  this.route('i-i-s-kurs2-расширение-e',
  { path: 'i-i-s-kurs2-расширение-e/:id' });
  this.route('i-i-s-kurs2-расширение-e.new',
  { path: 'i-i-s-kurs2-расширение-e/new' });
  this.route('i-i-s-kurs2-экс-файлы-l');
  this.route('i-i-s-kurs2-экс-файлы-e',
  { path: 'i-i-s-kurs2-экс-файлы-e/:id' });
  this.route('i-i-s-kurs2-экс-файлы-e.new',
  { path: 'i-i-s-kurs2-экс-файлы-e/new' });
});

export default Router;
