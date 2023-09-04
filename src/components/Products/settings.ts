import { GridLocaleText } from '@mui/x-data-grid';
import * as Yup from 'yup';
export const validationSchema = Yup.object({
   title: Yup.string()
     .min(3, 'Має бути 3 або більше символів')
     .max(255, 'Має бути 255 символів або менше')
     .required(`Обов'язкове поле`),
   author: Yup.string()
     .min(3, 'Має бути 15 або більше символів')
     .max(100, 'Має бути 100 символів або менше')
     .required(`Обов'язкове поле`),
   discountPercentage: Yup.number()
     .integer('Має бути цілим числом')
     .min(0, 'Має бути не менше 0')
     .max(100, 'Має бути менше 100')
     .required(`Обов'язкове поле`),
   publishing_year: Yup.number()
     .integer('Має бути цілим числом')
     .min(1980, 'Має бути не менше 1980')
     .max(
       new Date().getFullYear(),
       'Не має бути більше поточного року'
     )
     .required(`Обов'язкове поле`),
   category: Yup.string().required(`Обов'язкове поле`),
   price: Yup.number().min(0, 'Має бути не менше 0'),
   rating: Yup.number().min(0, 'Має бути не менше 0'),
 });


export const GRID_DEFAULT_LOCALE_TEXT: GridLocaleText = {
  // Root
  noRowsLabel: 'Записів немає',
  noResultsOverlayLabel: 'Результати не знайдені.',

  // Density selector toolbar button text
  toolbarDensity: 'Щільність',
  toolbarDensityLabel: 'Щільність',
  toolbarDensityCompact: 'Компактний',
  toolbarDensityStandard: 'Стандартний',
  toolbarDensityComfortable: 'Зручний',

  // Columns selector toolbar button text
  toolbarColumns: 'Колонки',
  toolbarColumnsLabel: 'Вибрати колонки',

  // Filters toolbar button text
  toolbarFilters: 'Фільтри',
  toolbarFiltersLabel: 'Показати фільтри',
  toolbarFiltersTooltipHide: 'Приховати фільтри',
  toolbarFiltersTooltipShow: 'Показати фільтри',
  toolbarFiltersTooltipActive: (count: number) =>
    count !== 1
      ? `${count} активних фільтрів`
      : `${count} активний фільтр`,

  // Quick filter toolbar field
  toolbarQuickFilterPlaceholder: 'Пошук…',
  toolbarQuickFilterLabel: 'Пошук',
  toolbarQuickFilterDeleteIconLabel: 'Очистити',

  // Export selector toolbar button text
  toolbarExport: 'Експорт',
  toolbarExportLabel: 'Експорт',
  toolbarExportCSV: 'Завантажити як CSV',
  toolbarExportPrint: 'Друк',
  toolbarExportExcel: 'Завантажити як Excel',

  // Columns panel text
  columnsPanelTextFieldLabel: 'Знайти колонку',
  columnsPanelTextFieldPlaceholder: 'Заголовок колонки',
  columnsPanelDragIconLabel: 'Пересортувати колонку',
  columnsPanelShowAllButton: 'Показати всі',
  columnsPanelHideAllButton: 'Приховати всі',

  // Filter panel text
  filterPanelAddFilter: 'Додати фільтр',
  filterPanelRemoveAll: 'Видалити всі',
  filterPanelDeleteIconLabel: 'Видалити',
  filterPanelLogicOperator: 'Логічний оператор',
  filterPanelOperator: 'Оператор',
  filterPanelOperatorAnd: 'І',
  filterPanelOperatorOr: 'Або',
  filterPanelColumns: 'Колонки',
  filterPanelInputLabel: 'Значення',
  filterPanelInputPlaceholder: 'Значення фільтра',

  // Filter operators text
  filterOperatorContains: 'містить',
  filterOperatorEquals: 'дорівнює',
  filterOperatorStartsWith: 'починається з',
  filterOperatorEndsWith: 'закінчується на',
  filterOperatorIs: 'є',
  filterOperatorNot: 'не є',
  filterOperatorAfter: 'після',
  filterOperatorOnOrAfter: 'на або після',
  filterOperatorBefore: 'до',
  filterOperatorOnOrBefore: 'на або до',
  filterOperatorIsEmpty: 'порожній',
  filterOperatorIsNotEmpty: 'не порожній',
  filterOperatorIsAnyOf: 'є одним із',
  'filterOperator=': '=',
  'filterOperator!=': '!=',
  'filterOperator>': '>',
  'filterOperator>=': '>=',
  'filterOperator<': '<',
  'filterOperator<=': '<=',

  // Header filter operators text
  headerFilterOperatorContains: 'Містить',
  headerFilterOperatorEquals: 'Дорівнює',
  headerFilterOperatorStartsWith: 'Починається з',
  headerFilterOperatorEndsWith: 'Закінчується на',
  headerFilterOperatorIs: 'Є',
  headerFilterOperatorNot: 'Не є',
  headerFilterOperatorAfter: 'Після',
  headerFilterOperatorOnOrAfter: 'На або після',
  headerFilterOperatorBefore: 'До',
  headerFilterOperatorOnOrBefore: 'На або до',
  headerFilterOperatorIsEmpty: 'Порожній',
  headerFilterOperatorIsNotEmpty: 'Не порожній',
  headerFilterOperatorIsAnyOf: 'Є одним із',
  'headerFilterOperator=': 'Дорівнює',
  'headerFilterOperator!=': 'Не дорівнює',
  'headerFilterOperator>': 'Більше',
  'headerFilterOperator>=': 'Більше або дорівнює',
  'headerFilterOperator<': 'Менше',
  'headerFilterOperator<=': 'Менше або дорівнює',

  // Filter values text
  filterValueAny: 'будь-який',
  filterValueTrue: 'так',
  filterValueFalse: 'ні',

  // Column menu text
  columnMenuLabel: 'Меню',
  columnMenuShowColumns: 'Показати колонки',
  columnMenuManageColumns: 'Управління колонками',
  columnMenuFilter: 'Фільтр',
  columnMenuHideColumn: 'Приховати колонку',
  columnMenuUnsort: 'Скасувати сортування',
  columnMenuSortAsc: 'Сортувати за зростанням',
  columnMenuSortDesc: 'Сортувати за спаданням',

  // Column header text
  columnHeaderFiltersTooltipActive: (count: number) =>
    count !== 1
      ? `${count} активних фільтрів`
      : `${count} активний фільтр`,
  columnHeaderFiltersLabel: 'Показати фільтри',
  columnHeaderSortIconLabel: 'Сортування',

  // Rows selected footer text
  footerRowSelected: (count: number) =>
    count !== 1
      ? `${count.toLocaleString()} рядків вибрано`
      : `${count.toLocaleString()} рядок вибрано`,

  // Total row amount footer text
  footerTotalRows: 'Всього рядків:',

  // Total visible row amount footer text
  footerTotalVisibleRows: (
    visibleCount: number,
    totalCount: number
  ) =>
    `${visibleCount.toLocaleString()} з ${totalCount.toLocaleString()}`,

  // Checkbox selection text
  checkboxSelectionHeaderName:
    'Вибір за допомогою прапорця',
  checkboxSelectionSelectAllRows: 'Вибрати всі рядки',
  checkboxSelectionUnselectAllRows:
    'Скасувати вибір всіх рядків',
  checkboxSelectionSelectRow: 'Вибрати рядок',
  checkboxSelectionUnselectRow: 'Скасувати вибір рядка',

  // Boolean cell text
  booleanCellTrueLabel: 'так',
  booleanCellFalseLabel: 'ні',

  // Actions cell more text
  actionsCellMore: 'більше',

  // Column pinning text
  pinToLeft: 'Закріпити зліва',
  pinToRight: 'Закріпити справа',
  unpin: 'Зняти закріплення',

  // Tree Data
  treeDataGroupingHeaderName: 'Групувати',
  treeDataExpand: 'переглянути дітей',
  treeDataCollapse: 'сховати дітей',

  // Grouping columns
  groupingColumnHeaderName: 'Групувати',
  groupColumn: (name: string) => `Групувати за ${name}`,
  unGroupColumn: (name: string) =>
    `Зупинити групування за ${name}`,

  // Master/detail
  detailPanelToggle: 'Перемкнути деталі',
  expandDetailPanel: 'Розгорнути',
  collapseDetailPanel: 'Згорнути',

  // Used core components translation keys
  MuiTablePagination: {},

  // Row reordering text
  rowReorderingHeaderName: 'Пересортування рядків',

  // Aggregation
  aggregationMenuItemHeader: 'Агрегація',
  aggregationFunctionLabelSum: 'сума',
  aggregationFunctionLabelAvg: 'середнє',
  aggregationFunctionLabelMin: 'мінімум',
  aggregationFunctionLabelMax: 'максимум',
  aggregationFunctionLabelSize: 'розмір',
};
