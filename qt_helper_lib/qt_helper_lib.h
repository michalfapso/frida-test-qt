#ifndef QT_HELPER_LIB_H
#define QT_HELPER_LIB_H

#include "qt_helper_lib_global.h"
#include <QString>

#define STDCALL __attribute__((stdcall))

extern "C" QT_HELPER_LIBSHARED_EXPORT const char* number_to_cstr(int i);

extern "C" QT_HELPER_LIBSHARED_EXPORT const char* qstring_to_cstr (QString  qstr);
extern "C" QT_HELPER_LIBSHARED_EXPORT const char* qstringp_to_cstr(QString* qstr);

struct qt_helper_lib_ByteArray {
	unsigned int size;
	const char* data;
};
extern "C" QT_HELPER_LIBSHARED_EXPORT qt_helper_lib_ByteArray qstringp_to_bytearray(QString* qstr);
extern "C" QT_HELPER_LIBSHARED_EXPORT unsigned int qt_helper_lib_ByteArray_get_size(qt_helper_lib_ByteArray* ba);
extern "C" QT_HELPER_LIBSHARED_EXPORT const char*  qt_helper_lib_ByteArray_get_data(qt_helper_lib_ByteArray* ba);

extern "C" QT_HELPER_LIBSHARED_EXPORT unsigned int qstringp_to_buffer(QString* qstr, char* buffer, unsigned int bufferSize);

extern "C" QT_HELPER_LIBSHARED_EXPORT const char* stdstring_to_cstr (std::string  str);
extern "C" QT_HELPER_LIBSHARED_EXPORT const char* stdstringp_to_cstr(std::string* str);

#endif // QT_HELPER_LIB_H
