import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.конвертация-файла.caption'),
          title: i18n.t('forms.application.sitemap.конвертация-файла.title'),
          children: [{
            link: 'i-i-s-kurs2-загр-файла-l',
            caption: i18n.t('forms.application.sitemap.конвертация-файла.i-i-s-kurs2-загр-файла-l.caption'),
            title: i18n.t('forms.application.sitemap.конвертация-файла.i-i-s-kurs2-загр-файла-l.title'),
            icon: 'suitcase',
            children: null
          }, {
            link: 'i-i-s-kurs2-выгр-файла-l',
            caption: i18n.t('forms.application.sitemap.конвертация-файла.i-i-s-kurs2-выгр-файла-l.caption'),
            title: i18n.t('forms.application.sitemap.конвертация-файла.i-i-s-kurs2-выгр-файла-l.title'),
            icon: 'list',
            children: null
          }, {
            link: 'i-i-s-kurs2-экс-файлы-l',
            caption: i18n.t('forms.application.sitemap.конвертация-файла.i-i-s-kurs2-экс-файлы-l.caption'),
            title: i18n.t('forms.application.sitemap.конвертация-файла.i-i-s-kurs2-экс-файлы-l.title'),
            icon: 'address card',
            children: null
          }, {
            link: 'i-i-s-kurs2-конвер-файлы-l',
            caption: i18n.t('forms.application.sitemap.конвертация-файла.i-i-s-kurs2-конвер-файлы-l.caption'),
            title: i18n.t('forms.application.sitemap.конвертация-файла.i-i-s-kurs2-конвер-файлы-l.title'),
            icon: 'paperclip',
            children: null
          }, {
            link: 'i-i-s-kurs2-конверт-l',
            caption: i18n.t('forms.application.sitemap.конвертация-файла.i-i-s-kurs2-конверт-l.caption'),
            title: i18n.t('forms.application.sitemap.конвертация-файла.i-i-s-kurs2-конверт-l.title'),
            icon: 'briefcase',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.справочники.caption'),
          title: i18n.t('forms.application.sitemap.справочники.title'),
          children: [{
            link: 'i-i-s-kurs2-расширение-l',
            caption: i18n.t('forms.application.sitemap.справочники.i-i-s-kurs2-расширение-l.caption'),
            title: i18n.t('forms.application.sitemap.справочники.i-i-s-kurs2-расширение-l.title'),
            icon: 'archive',
            children: null
          }, {
            link: 'i-i-s-kurs2-еди-изм-l',
            caption: i18n.t('forms.application.sitemap.справочники.i-i-s-kurs2-еди-изм-l.caption'),
            title: i18n.t('forms.application.sitemap.справочники.i-i-s-kurs2-еди-изм-l.title'),
            icon: 'chart bar',
            children: null
          }, {
            link: 'i-i-s-kurs2-вид-док-l',
            caption: i18n.t('forms.application.sitemap.справочники.i-i-s-kurs2-вид-док-l.caption'),
            title: i18n.t('forms.application.sitemap.справочники.i-i-s-kurs2-вид-док-l.title'),
            icon: 'chart bar',
            children: null
          }]
        }
      ]
    };
  }),
})