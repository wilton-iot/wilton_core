/* 
 * File:   header.hpp
 * Author: alex
 *
 * Created on May 5, 2016, 9:00 PM
 */

#ifndef WILTON_SERVERCONF_HEADER_HPP
#define	WILTON_SERVERCONF_HEADER_HPP

#include <string>

#include "staticlib/config.hpp"
#include "staticlib/serialization.hpp"

#include "common/wilton_internal_exception.hpp"
#include "common/utils.hpp"

namespace wilton {
namespace serverconf {

class header {
public:
    std::string name = "";
    std::string value = "";

    header(const header&) = delete;

    header& operator=(const header&) = delete;

    header(header&& other) :
    name(std::move(other.name)),
    value(std::move(other.value)) { }

    header& operator=(header&& other) {
        this->name = std::move(other.name);
        this->value = std::move(other.value);
        return *this;
    }

    header() { }
    
    header(std::string name, std::string value) :
    name(std::move(name)),
    value(std::move(value)) { }

    header(const staticlib::serialization::json_value& json) {
        namespace ss = staticlib::serialization;
        for (const ss::json_field& fi : json.as_object()) {
            auto& fname = fi.name();
            if ("name" == fname) {
                this->name = common::get_json_string(fi);
            } else if ("value" == fname) {
                this->value = common::get_json_string(fi);
            } else {
                throw common::wilton_internal_exception(TRACEMSG("Unknown 'header' field: [" + fname + "]"));
            }
        }
        if (0 == name.length()) throw common::wilton_internal_exception(TRACEMSG(
                "Invalid 'header.name' field: []"));
        if (0 == value.length()) throw common::wilton_internal_exception(TRACEMSG(
                "Invalid 'header.value' field: []"));
    }

    staticlib::serialization::json_field to_json() const {
        namespace ss = staticlib::serialization;
        return ss::json_field{name, ss::json_value{value}};
    }
};


} // namepspace
}

#endif	/* WILTON_SERVERCONF_HEADER_HPP */
