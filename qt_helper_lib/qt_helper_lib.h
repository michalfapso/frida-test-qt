#ifndef QT_HELPER_LIB_H
#define QT_HELPER_LIB_H

#include "qt_helper_lib_global.h"
#include <QString>

#define STDCALL __attribute__((stdcall))

extern "C" QT_HELPER_LIBSHARED_EXPORT const char* number_to_cstr(int i);

extern "C" QT_HELPER_LIBSHARED_EXPORT const char* qstring_to_cstr (QString  qstr);
extern "C" QT_HELPER_LIBSHARED_EXPORT const char* qstringp_to_cstr(QString* qstr);

extern "C" QT_HELPER_LIBSHARED_EXPORT const char* stdstring_to_cstr (std::string  str);
extern "C" QT_HELPER_LIBSHARED_EXPORT const char* stdstringp_to_cstr(std::string* str);

#endif // QT_HELPER_LIB_H
